import React, {FC, useEffect, useState} from 'react';
import {CityStatistics} from "../../api/Models";
import ApiSingleton from "../../api/Api";
import Grid from "@mui/material/Grid";
import {Pie, PieChart, ResponsiveContainer} from "recharts";
import ActiveShapeCities from "./ActiveShapeCities";
import Typography from "@mui/material/Typography";

const CitiesStatistics: FC = () => {
    const [cityStatistics, setCityStatistics] = useState<CityStatistics[]>([])
    const [activeIndexCities, setActiveIndexCities] = useState<number>(0)

    const getCityStatistics = async () => {
        const result = await ApiSingleton._artsStatisticsApi.getCityStatistics()
        setCityStatistics(result)
    }

    useEffect(() => {
        (async () => {
            await getCityStatistics()
        })()
    }, [])

    return (
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h4">
                Statistics on the sales of paintings in cities
            </Typography>
            {cityStatistics.length !== 0 && (
                <Grid item xs={12}>
                    <ResponsiveContainer aspect={2} width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                onClick={() => window.location.assign("/statistics-cities/" + cityStatistics[activeIndexCities].city)}
                                activeIndex={activeIndexCities}
                                activeShape={ActiveShapeCities}
                                data={cityStatistics}
                                cx="50%"
                                cy="50%"
                                innerRadius={120}
                                outerRadius={160}
                                fill="#8884d8"
                                dataKey="amount"
                                onMouseEnter={(_, index) => setActiveIndexCities(index)}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </Grid>
            )}
        </Grid>
    );
};

export default CitiesStatistics;