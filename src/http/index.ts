import axios from 'axios'

const httpApi = axios.create({
  baseURL: '',
  timeout: 15000,
})

export default httpApi
