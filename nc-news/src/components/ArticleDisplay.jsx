
export default function ArticleDisply({ article }){
    console.log(article)
    return (
        <section>
        <h1>{article.title}</h1>
        <h2>{article.author}</h2>
        <p>{article.body}</p>
        <h3>{`${article.created_at.slice(0, 9)}${article.votes}`}</h3>
        </section>
        )
}