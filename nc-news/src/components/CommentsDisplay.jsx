
export default function CommentsDisplay({comments}){

    let array = comments.length

    return(
        <section className="commentsList">
            <h2>Article comments:</h2>
            <ul key={array--}>
                {
                comments.map((element)=>{
                    return(
                        <ul className="commentCard" key={element.comment_id}>
                            <h3 id="commentUser">{`${element.author} ${element.created_at.slice(0, 9)}`}</h3>
                            <p>{element.body}</p>
                        </ul>
                    )
                })}
            </ul>
        </section>
    )
};  