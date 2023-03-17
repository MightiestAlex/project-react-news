import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GETarticle, GETcomments } from '../utils/apis.jsx';
import '../styles/Article.css';

import ArticleDisplay from './ArticleDisplay.jsx';
import CommentsDisplay from './CommentsDisplay.jsx';
import ArticleVotes from './ArticleVotes.jsx';
import CommentPOST from './CommentPOST.jsx'

export default function Article(){
    const [articleLoading, setArticleLoading] = useState(false)
    const [commentsLoading, setCommentsLoading] = useState(false)
    const [article, setArticle] = useState();
    const [comments, setComments] = useState();
    let { article_id } = useParams();

    useEffect(()=>{
        setArticleLoading(true)

        GETarticle(article_id)
        .then((response)=>{
            setArticle(response.data.article)
            setArticleLoading(false)     
        })
    }, [article_id])

    useEffect(()=>{
        setCommentsLoading(true)
        GETcomments(article_id)
        .then((response)=>{
            setComments(response.data.comments)
            setCommentsLoading()
        })
    }, [article_id])

        return (
            <main>
                {article && !articleLoading ?
                <>
                    <ArticleDisplay article={article}/>
                    <ArticleVotes article={article}/>
                </> 
                : <h3>Ready? Loading Articles.</h3>}

                {comments && !commentsLoading ?//Will have to add hard coded user at the moment!
                <>
                <CommentPOST article_id={article_id} comments={comments} setComments={setComments}/>
                </>
                : <h3>Ready? Loading Comments.</h3>}
            </main>
        )
};