import React from "react"

import { Grid, Card, CardContent, Typography, } from "@material-ui/core"
import CountUp from "react-countup";

import cx from 'classnames';

import styles from "./Cards.module.css"

const Cards = ( data ) => {

    if(!data.data.confirmed) return 'loading...';

    const { confirmed, recovered, deaths, lastUpdate} = data.data

    return (
        <Grid container spacing={3} justifyContent="center" className={styles.container}>
            <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography gutterBottom variant="h4" >
                        Infected
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        <CountUp 
                            start = {0}
                            end = {confirmed.value}
                            duration = {2.5}
                            separator = "."
                        />
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.recover)}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        Recover
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        <CountUp 
                            start = {0}
                            end = {recovered.value}
                            duration = {2.5}
                            separator = "."
                        />
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        Deaths
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        <CountUp 
                            start = {0}
                            end = {deaths.value}
                            duration = {2.5}
                            separator = "."
                        />
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                </CardContent>
            </Grid>
        </Grid>
    );
}

export default Cards