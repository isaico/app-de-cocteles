import axios from 'axios';

const respApi = axios.create({ baseURL: 'http://localhost:3000' });

export const getProducts = async () => {
    const res = await respApi.get('/cocktails');
    const iterableArray = Array.from(res.data)
    console.log("falta montar,",iterableArray)
    return iterableArray;
};






