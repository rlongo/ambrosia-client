import axios from 'axios';

export class Ambrosia {
    AxiosConfig = {
        baseURL: "http://127.0.0.1:8000/api/v1",
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    constructor() {
        axios.interceptors.request.use(request => {
            console.log('Starting Request', request)
            return request
          });
    }

    getRecipes() {
       return axios.get('/recipes', this.AxiosConfig);
    }
};