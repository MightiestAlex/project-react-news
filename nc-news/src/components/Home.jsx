import { GETarticles } from '../utils/apis.jsx';
import {useState, useEffect} from 'react'
import '../styles/Home.css'

function Home(){

    const [articles, setArticles] = useState(false)

    useEffect(()=>{
        GETarticles().then((data)=>{
            return setArticles(data.data.articles)})
    }, [])

    //Shortens article to a descriptive length. To be refined.. 
    function articleAbbreviator(text, max){
        return text && text.length > max ? text.slice(0,max).split(' ').slice(0, -1).join(' ') + "..." : text
    }

    //if article array has been retrieved
    if(articles){
    let slicedArticles = articles.slice(1, 7)
    let articleHeader =  (<section className='todaysArticle'>
                            <h3>ARTICLE OF THE DAY</h3>
                            <h3>{articles[0].title}</h3>
                            <h3>{articleAbbreviator(articles[0].body, 200)}</h3>
                            <span>
                                <h4>{`Author: ${articles[0].author} Topic: ${articles[0].topic} Votes: ${articles[0].votes}`}</h4>
                            </span>
                         </section>)
    
        return (
            <main className='articles'>
                {articleHeader}
                <ul className='articleList'>
                    {
                        slicedArticles.map((element, index)=>{
                            return (
                                <ul key={element.article_id}>
                                    <h3>{element.title}</h3>
                                    <h4>{element.author}</h4>
                                </ul>
                    )})}
                </ul>
            </main>)
     }
    //not retreived conditionaly render this
    return(<p>Pending...</p>)
}
export default Home;