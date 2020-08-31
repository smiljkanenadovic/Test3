import axios from 'axios'

const baseURL = 'https://api.spacexdata.com/v3';

export const companyInfo = () => {
    return axios.get(`${baseURL}/info`);
}

export const getShips = () => {
    return axios.get(`${baseURL}/ships`);
}