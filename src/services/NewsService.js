import axios from 'axios';

const apiClient = axios.create({
    baseURL : 'https://newsapi.org/v2'
    /* withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000 */
})

export default {
    getTopNews(){
        return apiClient.get('/top-headlines?country=fr&apiKey=a682a156d5584ceea6bd0d3a142626e3')
    }
}