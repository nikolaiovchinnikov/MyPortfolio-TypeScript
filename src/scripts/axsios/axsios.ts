import axios,{AxiosInstance} from 'axios';
const api_v_2_2 = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    headers: {
        'X-API-KEY': process.env.REACT_APP_SECRET_CODE??"",
        'Content-Type': 'application/json',
    },
  });
const api_v_2_1 = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.1/films',
    headers: {
        'X-API-KEY': process.env.REACT_APP_SECRET_CODE??"",
        'Content-Type': 'application/json',
    },
  });
export const getRequest = async (url:string,api:AxiosInstance) => {
    try {
        const request = await api.get(url)
        console.log(request.data)
        if( request.status === 200 ) {
            return request.data
        }else {
            throw new Error()
        }
    }catch (err) {
        console.log(err)
    }
}



export {api_v_2_2, api_v_2_1}