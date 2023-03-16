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

const GETcomments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
}

const POSTcomment = (article_id, comment) => {
    return api.post(`/articles/${article_id}/comments`, comment)
}

const PATCHvote = (article_id, votes) => {
    return api.patch(`/articles/${article_id}`, votes)
}

export { GETarticles, GETarticle, GETcomments, POSTcomment, PATCHvote }