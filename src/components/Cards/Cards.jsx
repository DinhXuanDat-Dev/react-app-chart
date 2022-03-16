import React from "react"

import { Grid, Card, CardContent, Typography, } from "@material-ui/core"
import CountUp from "react-countup";

// const Cards = ({ data : {confirmed , recovered, deaths, lastUpdated} }) => {
const Cards = ( data ) => {

    if(!data.data.confirmed) return 'loading...';

    const { confirmed, recovered, deaths, lastUpdate} = data.data

    return (
        <Grid container spacing={3} justifyContent="center" >
            <Grid item component={Card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <CountUp 
                            start = {0}
                            end = {confirmed.value}
                            duration = {2.5}
                            separator = "."
                        />
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {recovered.value}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {deaths.value}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <CountUp 
                            start = {0}
                            end = {confirmed.value}
                            duration = {2.5}
                            separator = "."
                        />
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {recovered.value}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {deaths.value}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <CountUp 
                            start = {0}
                            end = {confirmed.value}
                            duration = {2.5}
                            separator = "."
                        />
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {recovered.value}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {deaths.value}
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