import { useState, useEffect } from 'react';

export default function CommentPOST(){

    const [author, setAuthor] = useState();
    const [topic, setTopic] = useState();
    const [body, setBody] = useState();

    function eHandler(event){
        event.preventDefault()
        console.log(event.target)
    }

    return(
        <section className="commentBox" onSubmit={eHandler}>
            <form className="box" >
            <fieldset>
                <legend>Comments Please</legend>
                <p>User:</p>
                <input required type="text" name="author" value={author} onChange={((event)=>{setAuthor(event.target.value)})}/>
                <p>Topic:</p>
                <input required type="text" name="topic"/>
                <br />
                <p>Comment:</p>
                <textarea required></textarea>
                <br />
                <button type="submit">POST</button>
            </fieldset>
            </form>
        </section>
    )
}

//Allow new topics
//title, topic, author, body, url 