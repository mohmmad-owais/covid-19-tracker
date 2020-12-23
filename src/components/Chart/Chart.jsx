import React,{useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line,Bar,Doughnut} from 'react-chartjs-2';
import { Grid } from '@material-ui/core';


function Chart({data : {confirmed ,deaths,recovered} , country}) {
    const [dailyData,setDailyData]=useState({});
    
    useEffect(()=>{
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
            // const dailyData = await fetchDailyData();
            
        }

        fetchAPI();
    },[]);
    
    const lineChart=(
        dailyData[0] ?
      (
        <Line 
            data={{
                labels:dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },
                {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill: true,

                }],
            }}
        />) : null
    );

    const barChart=(
        confirmed ?(
            <Bar
                data ={{
                    labels :['Infected','Recovered','Deaths'],
                    datasets:[{
                        label: 'People',
                        backgroundColor:['rgb(0, 0, 255, 0.5)','rgb(0, 255, 0, 0.5)','rgb(255, 0, 0, 0.5)'],
                        data: [confirmed.value,recovered.value,deaths.value]
                    }]
                }}
                options={{
                    legend : {display: false},
                    title  : { display : true,text:`Current state in ${country}`},
                }}
            />
        ) : null
    )

    const doughnut = ( 
       confirmed ?( 
       <Doughnut
        
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets: [{
                label:'People',
                data: [confirmed.value,recovered.value,deaths.value],
                backgroundColor:['rgb(0, 0, 255, 0.5)','rgb(0, 255, 0, 0.5)','rgb(255, 0, 0, 0.5)'],
            }]

            }}
            options={{
                    legend : {display: true},
                    title  : { display : true,text:`Current state in ${country ? country : 'Global'}`},
                }}
            
        />
        ) : null
)

    return (
        <Grid container justify="center">
            <Grid item  md={6} sm={12}>
           {country ? barChart : lineChart} 
           </Grid>
           <Grid item md={6} sm={12}>    
                {doughnut}
           </Grid>
           
           
           
        </Grid>
    )
}

export default Chart
