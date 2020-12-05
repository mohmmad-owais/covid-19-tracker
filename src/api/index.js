import axios from 'axios'; // is used to make api request

const url ='https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{
    let changeAbleUrl = url;

    if(country)
    {
        changeAbleUrl =`${url}/countries/${country}`
    }

    try{
        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeAbleUrl);
        
        return {confirmed,recovered,deaths,lastUpdate}
        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recoverd: data.recoverd,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate,
            
        // }
        // response.data;
        // return modifiedData;
    }
    catch(error){
console.log(error);
    }
     
}

export const fetchDailyData = async() =>{
        try{
            const { data }= await axios.get('https://api.covidtracking.com/v1/us/daily.json');
           return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
        }
        catch(error){
            console.log(error);
        }
}

export const fetchCountries = async() =>{
    try{
        const {data : {countries}} =await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);

    }
    catch(error){
        console.log(error);

    }
}
