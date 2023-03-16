
export default function ArticleDisplay({ article }){
    
    return (
        <section>
        <h1>{article.title}</h1>
        <h2>{article.author}</h2>
        <p>{article.body}</p>
        <h3>{`${article.created_at.slice(0, 9)}${article.votes}`}</h3>
        <img src={article.article_img_url}></img>
        </section>
        )
}