import axios from 'axios';

const api = axios.create({
    baseURL: 'https://project-nc-news.onrender.com/api',
});

const GETarticles = () => {
    return api.get('/articles')
}

const GETarticle = (article_id) => {
    return api.get(`/articles/${article_id}`)
}

export { GETarticles, GETarticle }