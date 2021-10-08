import axios from 'axios';

const KEY = '84c10d38-4946-4775-8a79-88547af18e23';

const catApi = axios.create({
    baseURL: 'https://api.thecatapi.com/v1'
})

catApi.defaults.headers.common['x-api-key'] = KEY;

export default catApi;