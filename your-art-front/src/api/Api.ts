import ArtsApi from "./ArtsApi";

class Api
{
    readonly  _artsApi: ArtsApi;

    constructor(artsApi: ArtsApi) {
        this._artsApi = artsApi;
    }
}

const basePath = "http://localhost:5000";
const ApiSingleton = new Api(new ArtsApi(basePath));

export default ApiSingleton;