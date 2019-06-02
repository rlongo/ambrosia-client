import axios from 'axios';

export class Ambrosia {
    AxiosConfig = {
        baseURL: "http://127.0.0.1:8000/api/v1",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    getRecipes() {
       return axios.get('/recipes', this.AxiosConfig);
    }
};