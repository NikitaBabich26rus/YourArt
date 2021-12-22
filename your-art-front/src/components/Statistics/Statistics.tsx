import React, {FC, useCallback, useEffect, useState} from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
    PieChart,
    ResponsiveContainer,
    Pie,
    Sector,
    BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Cell
} from 'recharts';
import {
    CityStatistics,
    DeadOrAliveStatistics, GenderStatistics,
    NationalityStatistics,
    TechniqueStatistics,
    YearsOfSoldPictures
} from "../../api/Models";
import ApiSingleton from "../../api/Api";
import ActiveShapeCities from './ActiveShapeCities';
import ActiveShapeTechnique from "./ActiveShapeTechnique";
import Grid from '@mui/material/Grid';
import CitiesStatistics from "./CitiesStatistics";


const Statistics: FC = () => {

    const [techniquesStatistics, setTechniquesStatistics] = useState<TechniqueStatistics[]>([])
    const [nationalityStatistics, setNationalityStatistics] = useState<NationalityStatistics[]>([])
    const [yearsStatistics, setYearsStatistics] = useState<YearsOfSoldPictures[]>([])
    const [deadOrAliveStatistics, setDeadOrAliveStatistics] = useState<DeadOrAliveStatistics[]>([])
    const [genderStatistics, setGenderStatistics] = useState<GenderStatistics[]>([])


    const [activeIndexTechnique, setActiveIndexTechnique] = useState<number>(0)


    useEffect(() => {
        getTechniquesStatistics()
        getNationalityStatistics()
        getYearsStatistics()
        getGenderStatistics()
        getDeadOrAliveStatistics()
    }, [])

    const getYearsStatistics = async () => {
        const result = await ApiSingleton._artsStatisticsApi.getYearsOfSoldPictures()
        setYearsStatistics(result)
    }

    const getNationalityStatistics = async () => {
        const result = await ApiSingleton._artsStatisticsApi.getNationalityStatistics()
        setNationalityStatistics(result)
    }

    const getTechniquesStatistics = async () => {
        const result = await ApiSingleton._artsStatisticsApi.getTechniquesStatistics()
        setTechniquesStatistics(result)
    }

    const getDeadOrAliveStatistics = async () => {
        const result = await ApiSingleton._artsStatisticsApi.getDeadOrAliveStatistics();
        setDeadOrAliveStatistics(result)
    }

    const getGenderStatistics = async () => {
        const result = await ApiSingleton._artsStatisticsApi.getGenderStatistics();
        setGenderStatistics(result)
    }

    const [activeIndexDeadOrAlive, setActiveIndexDeadOrAlive] = useState(0);

    const handleClickDeadOrAlive = useCallback(
        (entry: any, index: number) => {
            setActiveIndexDeadOrAlive(index);
        },
        [setActiveIndexDeadOrAlive]
    );

    const [activeIndexGender, setActiveIndexGender] = useState(0);

    const handleClickGender = useCallback(
        (entry: any, index: number) => {
            setActiveIndexGender(index);
        },
        [setActiveIndexGender]
    );

    return (
        <Container maxWidth="md" sx={{marginTop: '20px', color: '#e0e0e0'}}>
            <Grid container sx={{marginTop: '40px'}} justifyContent='center'>
                <CitiesStatistics/>
                <Grid item>
                    <Typography variant="h4">
                        Painting technique statistics
                    </Typography>
                </Grid>
                {techniquesStatistics.length !== 0 && (
                    <Grid item xs={12}>
                        <ResponsiveContainer aspect={2} width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    activeIndex={activeIndexTechnique}
                                    activeShape={ActiveShapeTechnique}
                                    data={techniquesStatistics}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={120}
                                    outerRadius={160}
                                    fill="#8884d8"
                                    dataKey="amount"
                                    onMouseEnter={(_, index) => setActiveIndexTechnique(index)}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </Grid>
                )}
                {nationalityStatistics.length !== 0 && (
                    <Grid container xs={12} justifyContent="center" sx={{marginTop: "20px"}}>
                        <Grid item>
                            <Typography variant="h4">
                                Authors' nationality statistics
                            </Typography>
                        </Grid>
                        <Grid item>
                            <BarChart
                                width={600}
                                height={300}
                                data={nationalityStatistics}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="nationality" scale="point" padding={{left: 10, right: 10}}/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Bar dataKey="amount" fill="#8884d8" background={{fill: "#424242"}}/>
                            </BarChart>
                        </Grid>
                    </Grid>
                )}
                {yearsStatistics.length !== 0 && (
                    <Grid container xs={12} justifyContent="center" sx={{marginTop: "20px"}}>
                        <Grid item>
                            <Typography variant="h4">
                                Amount of sold pictures
                            </Typography>
                        </Grid>
                        <Grid item>
                            <BarChart
                                width={600}
                                height={300}
                                data={yearsStatistics}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5
                                }}
                                barSize={20}
                            >
                                <XAxis dataKey="year" scale="point" padding={{left: 10, right: 10}}/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Bar dataKey="amount" fill="#8884d8" background={{fill: "#424242"}}/>
                            </BarChart>
                        </Grid>
                    </Grid>
                )}
                <Grid item>
                    <Grid container xs={12} justifyContent="space-between" sx={{marginTop: "20px"}}>
                        {genderStatistics.length !== 0 && (
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5">
                                    Gender
                                </Typography>
                                <BarChart width={150} height={300} data={genderStatistics}>
                                    <Bar dataKey="amount" onClick={handleClickGender}>
                                        {genderStatistics.map((entry, index) => (
                                            <Cell
                                                cursor="pointer"
                                                fill={index === activeIndexGender ? "#82ca9d" : "#8884d8"}
                                                key={`cell-${index}`}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                                <Typography>
                                    {`Amount of "${genderStatistics[activeIndexGender].amount}": 
                                ${genderStatistics[activeIndexGender].gender}`}
                                </Typography>
                            </Grid>
                        )}
                        {deadOrAliveStatistics.length !== 0 && (
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5">
                                    Alive or dead
                                </Typography>
                                <BarChart width={150} height={300} data={deadOrAliveStatistics}>
                                    <Bar dataKey="amount" onClick={handleClickDeadOrAlive}>
                                        {deadOrAliveStatistics.map((entry, index) => (
                                            <Cell
                                                cursor="pointer"
                                                fill={index === activeIndexDeadOrAlive ? "#82ca9d" : "#8884d8"}
                                                key={`cell-${index}`}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                                <Typography>
                                    {`Amount of "${deadOrAliveStatistics[activeIndexDeadOrAlive].amount}":
                                 ${deadOrAliveStatistics[activeIndexDeadOrAlive].deadOrAlive}`}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}


export default Statistics;