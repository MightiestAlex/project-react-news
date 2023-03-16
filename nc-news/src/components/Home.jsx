import { GETarticles } from '../utils/apis.jsx';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css'

export default function Home(){

    const [articles, setArticles] = useState(false);

    useEffect(()=>{
        GETarticles().then((data)=>{
            return setArticles(data.data.articles)})
    }, [])

    //Shortens article to a descriptive length. To be refined.. 
    function articleAbbreviator(text, max){
        return text && text.length > max ? text.slice(0,max).split(' ').slice(0, -1).join(' ') + "..." : text
    };

    //Generates uniques key of parent list, 
 

    //If article array has been retrieved
    if(articles){
        let articleArrayLength = articles.length - 1;

        let slicedArticles = articles.slice(1, 7)
        let articleHeader =  (<Link to={`/articles/${articles[0].article_id}`} className='articleHeadLink'>
                                <section className='todaysArticle'>
                                    <h3>ARTICLE OF THE DAY</h3>
                                    <h3>{articles[0].title}</h3>
                                    <h3>{articleAbbreviator(articles[0].body, 200)}</h3>
                                    <img src={articles[0].article_img_url}></img>
                                    <span>
                                        <h4>{`Author: ${articles[0].author} Topic: ${articles[0].topic} Votes: ${articles[0].votes}`}</h4>
                                    </span>
                                </section>
                                </Link>)

            return (
                <main className='articlesMain'>
                    {articleHeader}
                    <ul className='articlesList' key={articleArrayLength--}>
                        {
                            slicedArticles.map((element)=>{
                                return (
                                    <Link to={`/articles/${element.article_id}`} className='articlesLink'>
                                    <ul key={element.article_id}>
                                        <h3>{element.title}</h3>
                                        <h4>{element.author}</h4>
                                    </ul>
                                    </Link>
                        )})}
                    </ul>
                </main>
                )
    }
    //not retreived conditionaly render this
    return(<p>Pending...</p>)
};
