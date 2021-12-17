import axios from "axios";

export default class ArtsStatisticsApi {
    private readonly _basePath;

    constructor(basePath: string) {
        this._basePath = basePath;
    }

    public getCityStatistics = async () => {
        const response = await axios.get(this._basePath + '/api/ArtsStatistics/getCities')
        return response.data
    }

    public getTechniquesStatistics = async () => {
        const response = await axios.get(this._basePath + '/api/ArtsStatistics/getTechniques')
        return response.data
    }

    public getNationalityStatistics = async () => {
        const response = await axios.get(this._basePath + '/api/ArtsStatistics/getAuthorsNationality')
        return response.data
    }

    public getYearsOfSoldPictures = async () => {
        const response = await axios.get(this._basePath + '/api/ArtsStatistics/getYearsOfSoldPictures')
        return response.data
    }

    public getGenderStatistics = async () => {
        const response = await axios.get(this._basePath + '/api/ArtsStatistics/getGenderStatistics')
        return response.data
    }

    public getDeadOrAliveStatistics = async () => {
        const response = await axios.get(this._basePath + '/api/ArtsStatistics/getDeadOrAliveStatistics')
        return response.data
    }
}