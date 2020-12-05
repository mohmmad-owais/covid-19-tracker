import React from 'react';
import CountUp from 'react-countup';
import {Card,CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}}) =>{
    if(!confirmed)
    {
        return 'Loading';
    }
    
    return(

    <div className={styles.container}>
        
      <Grid container spacing={3} justify="center">
          <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">Infected</Typography>
          <Typography variant="h5" >
        <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
          </Typography>
    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of active cases</Typography>
          
        
        </CardContent>

</Grid>
   <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">Recoverd</Typography>
          <Typography variant="h5" ><CountUp start={0} end={recovered.value} duration={2.5} separator="," /></Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of recovered cases</Typography>
          
        
        </CardContent>

</Grid>
   <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">Deaths</Typography>
          <Typography variant="h5" ><CountUp start={0} end={deaths.value} duration={2.5} separator="," /></Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">Number of deaths </Typography>
          
        
        </CardContent>

</Grid>
      </Grid>
    </div>

    )

}

export default Cards 