import axios from 'axios';

const apiClient = axios.create({
    baseURL : 'https://newsapi.org/v2',
})

export default {
    getTopNews(){
        return apiClient.get('/top-headlines?country=gb&apiKey=a682a156d5584ceea6bd0d3a142626e3')
    },
    getTopicNews(){
        return apiClient.get('/top-headlines?country=us&apiKey=a682a156d5584ceea6bd0d3a142626e3')
    },
    getVueNews(){
        return apiClient.get('/everything?q=vuejss&apiKey=a682a156d5584ceea6bd0d3a142626e3')
    }
    /* ?domains=techcrunch.com */
}