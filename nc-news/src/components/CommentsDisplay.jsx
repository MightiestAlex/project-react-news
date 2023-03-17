import CommentPOST from "./CommentPOST"

export default function CommentsDisplay({ comments, userComment, username }){
    
    console.log('comments: ', comments,
     'userComment:', userComment,
     'username: ', username);

     let newComments = [];

     if(userComment){
        let object = {
            'author': username,
            'body': userComment,
            'comment_id': comments[0].comment_id + 1

        }
        console.log(object)
        newComments = [...comments]
        newComments.unshift(object)
        console.log('new: ', newComments)
     }else{
        newComments = [...comments]
     }

    let array = newComments.length;

    if(comments){
        let commenter = (<section className="commentsList">
            <h2>Article comments:</h2>
            <ul key={--array}>
                {
                newComments.map((element)=>{
                    return(
                        <ul className="commentCard" key={element.comment_id}>
                            <h3 id="commentUser">{`${element.author}`}</h3>
                            <p>{element.body}</p>
                        </ul>
                    )
                })}
            </ul>
        </section>)

        return(
            <>
                { commenter }
            </>)

    }else {
        return (
        <section> 
            <h2>Article comments:</h2>
            <p>Comments not found.</p>
        </section>
        
        )
    }
};  