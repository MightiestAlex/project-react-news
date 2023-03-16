import { useState, useEffect } from 'react';

import { POSTcomment } from '../utils/apis.jsx'

export default function CommentPOST({ article_id }){

    const [author, setAuthor] = useState();
    const [body, setBody] = useState();
    const [userComment, setUserComment] = useState()

    function eHandler(event){
        event.preventDefault()

        if(userComment){return}

        const comment = {
            username: 'grumpy19',
            body: body
         }  
        
        POSTcomment(article_id, {username: 'grumpy19', body: body})
        .then((response)=>{
            console.log(response.data.post.body)
            setUserComment(response.data.post.body)
        }).catch((error)=>{
            console.log('Error: ', error)
        })  
    }

    return(
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
}

//Can only post a comment with user already on server!
