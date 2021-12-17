import ArtsApi from "./ArtsApi";
import ArtsStatisticsApi from "./ArtsStatisticsApi";

class Api
{
    readonly  _artsApi: ArtsApi;
    readonly _artsStatisticsApi;

    constructor(artsApi: ArtsApi, artsStatisticsApi: ArtsStatisticsApi) {
        this._artsApi = artsApi;
        this._artsStatisticsApi = artsStatisticsApi;
    }
}

const basePath = "http://localhost:5000";
const ApiSingleton = new Api(new ArtsApi(basePath), new ArtsStatisticsApi(basePath));

export default ApiSingleton;