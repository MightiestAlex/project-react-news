import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GETarticle, GETcomments } from '../utils/apis.jsx';
import '../styles/Article.css';

import ArticleDisplay from './ArticleDisplay.jsx';
import CommentsDisplay from './CommentsDisplay.jsx';
import ArticleVotes from './ArticleVotes.jsx';
import CommentPOST from './CommentPOST.jsx'

export default function Article(){
    const [article, setArticle] = useState();
    const [comments, setComments] = useState();
    let { article_id } = useParams();

    useEffect(()=>{
        GETarticle(article_id)
        .then((response)=>{
            setArticle(response.data.article)         
        })
    }, [article_id])

    useEffect(()=>{
        GETcomments(article_id)
        .then((response)=>{
            setComments(response.data.comments)
        })
    }, [article_id])

    return (
        <main>
            {article && 
            <>
                <ArticleDisplay article={article}/>
                <ArticleVotes article={article}/>
            </>}
            {comments && //Will have to add hard coded user at the moment!
            <>
            <CommentPOST />
            <CommentsDisplay comments={comments}/>
            </>}
        </main>
    )
};