import axios from "axios";

export default class ArtsApi {
    private readonly _basePath;

    constructor(basePath: string) {
        this._basePath = basePath;
    }

    public getFirstArt = async () => {
        const response = await axios.get(this._basePath + '/api/Arts')
        return response.data
    }

    public getArtById = async (artId: number) => {
        const response = await axios.get(this._basePath + '/api/Arts/getArt/' + artId)
        return response.data
    }

    public getPageContent = async (pageNumber: number) => {
        const response = await axios.get(this._basePath + '/api/Arts/getArtsPage/' + pageNumber)
        return response.data
    }

    public getSimilarArts = async () => {
        const response = await axios.get(this._basePath + '/api/Arts/getSimilarArts')
        return response.data
    }

    public getArtsOfTheSameCity = async (city: string, currentPage: number) => {
        const response = await axios.get(this._basePath + '/api/Arts/getArtsOfTheSameCity/'
            + city + '/' + currentPage)
        return response.data
    }
}


