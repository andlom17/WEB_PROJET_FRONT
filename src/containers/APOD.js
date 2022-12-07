import axios from "axios"

const API_URL = "https://api.nasa.gov/";
const API_KEY = "AK4Xgy2EXpaJOv9cAiZmO4U35J1R4WZMX1MORUjc";

axios.interceptors.request.use(
  config => {
    config.params = config.params ? config.params : {}
    const configUrl = config.url
    if (configUrl.includes(API_URL)) {
      config.params["api_key"] = API_KEY
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }

)

export default {
  getApod() {
    return axios.get(`${API_URL}planetary/apod`);
  },
}