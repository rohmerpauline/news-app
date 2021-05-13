import axios from 'axios';

const apiClient = axios.create({
    baseURL : 'https://newsapi.org/v2'
})

export default {
    getTopNews(category){
        return apiClient.get('/top-headlines?country=us&category='+category+'&apiKey=b9c2bdafad044816add03157ed146b59')
    }
}