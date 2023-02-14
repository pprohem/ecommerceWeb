import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})


export const api2 = axios.create({
  baseURL: "http://localhost:8080"
  // baseURL: "https://james-api-production.up.railway.app/api"
})

export const getBurgers = () => api.get("/burgers")


export const getPizzas = () => api.get("/pizzas")


export const getDrinks = () => api.get("/drinks")


export const getIceCreams = () => api.get("/ice-creams")












export default api
