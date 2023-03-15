import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GETarticle } from '../utils/apis.jsx'

import ArticleDisplay from './ArticleDisplay.jsx'
import CommentsDisplay from './CommentsDisplay.jsx'
import ArticleVotes from './ArticleVotes.jsx'

export default function Article(){
    const [article, setArticle] = useState()
    let { article_id } = useParams();

    useEffect(()=>{
        GETarticle(article_id).
        then((article)=>{
            setArticle(article.data.article)
            
        })
    }, [article_id])

    return (
        <main>
        {article && 
        <><ArticleDisplay article={article}/> 
        <ArticleVotes />
        <CommentsDisplay article={article_id}/>
        </>
        }
        </main>
        
    )
}