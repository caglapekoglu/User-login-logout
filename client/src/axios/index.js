import axios from 'axios';
const HTTP = axios.create({
    baseURL:'http://localhost:5002/'
})
export const login= async(FormData)=> await HTTP.post('/users/signin', FormData);
export const register = async (formData) =>
  await HTTP.post("/users/signup", formData);