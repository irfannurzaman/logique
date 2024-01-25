import baseRequest from "../utils/request"

export default class ApiSearch extends baseRequest {
    constructor() {
        super();
        this.search = 'search?term=';
    }

    apiSearch = (body) => this.get(this.search+body)
}