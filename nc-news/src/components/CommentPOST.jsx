import { useState, useEffect } from 'react';

import { POSTcomment } from '../utils/apis.jsx'
import CommentsDisplay from './CommentsDisplay.jsx';

export default function CommentPOST({ article_id, comments, setComments}){

    const [loadingPOST, setLoadingPOST] = useState(false);
    const [body, setBody] = useState();
    const [userComment, setUserComment] = useState();
    const [username, setUsername] = useState('grumpy19');

    function eHandler(event){
        event.preventDefault()
        setLoadingPOST(true)

        if(userComment){return}

        const comment = {
            username: 'grumpy19',
            body: body
         }  
        
        POSTcomment(article_id, {username: 'grumpy19', body: body})
        .then((response)=>{
            setUserComment(response.data.post.body)
            setLoadingPOST(false)
        }).catch((error)=>{
            console.log('Error: ', error)
            setLoadingPOST(false)
        })  
    }

    function renderUserComments(){
        return (
            <CommentsDisplay comments={comments} userComment={userComment} username={username}/>
        )
    }

    function renderComments(){
        return (<CommentsDisplay comments={comments}/>) 
    }

    let commentPoster = (
    <>
        <section className="commentBox" onSubmit={eHandler}>
            <form className="box" >
            <fieldset>
                <p>Comment:</p>
                <textarea required value={body} onChange={((event)=>{setBody(event.target.value)})}></textarea>
                <br />
                <button type="submit">POST</button>
            </fieldset>
            </form>
        </section>
        <section className='userComment'>
            <h3>Your comment:</h3>
            <p>{ (userComment) ? userComment : 'No Commment yet!'}</p>
        </section>
    </>
    )

    return(
        <>
        {commentPoster}
        {(!userComment) ? renderComments() : renderUserComments()}
        </>   
    )
}

//Can only post a comment with user already on server!
//Advanced!! Sort out time and date for addition of the object for the future!
