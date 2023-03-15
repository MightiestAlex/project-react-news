import axios from 'axios';

const api = axios.create({
    baseURL: 'https://project-nc-news.onrender.com/api',
});

const GETarticles = () => {
    return api.get('/articles')
}

export { GETarticles }