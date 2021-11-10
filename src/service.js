import axios from 'axios'


const service = axios.create({
    baseURL: 'https://dev-api.mokkup.ai/v1'
})


service.interceptors.request.use(
  config => {
    config.headers['x-rapidapi-host'] = 'love-calculator.p.rapidapi.com';
    config.headers['x-rapidapi-key'] = process.env.REACT_APP_KEY;    
    return config
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if(error.response.status === 500) {
    }
    else if(error.response.status === 403) {
    }
    else if(error.response.status === 404) {
    }
    else if(error.response.status === 400) {
    }
    else if(error.response.status === 409) {
    }
    else if(error.response.status === 401){
        localStorage.clear()
        setTimeout( () => {
            window.location.href = "/"
        },1000)
    }     
    return Promise.reject(error)
  }
)

export default service