import Axios from 'axios';

const baseURL = 'https://itunes.apple.com/';


const headers = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // 'Accept-Encoding':'gzip;q=1.0, compress;q=0.5',
    'Cache-Control': 'no-cache',
    'x-api-key': baseURL
};
export default class baseRequest {
    constructor() {
        this.urls = {};
    }


    async get(url) {
        const Request = Axios.create({
            headers: headers
        });
        try {  
            const res = Request.get(`${baseURL}${url}`)
            return (await res).data
        } catch (error) {
            return error.response.data
        }
    }

}