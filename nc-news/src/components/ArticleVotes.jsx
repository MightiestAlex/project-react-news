import { useState, useEffect } from 'react';
import { PATCHvote } from '../utils/apis.jsx';

//Dodgy bug: voting updates article date as PSQL is updating date field!!!

export default function ArticleVotes({article: {article_id, votes}}){
    const [userVotes, setUserVotes] = useState(votes)

    function adder(article_id, votes){
        setUserVotes(currentVotes=>{return ++currentVotes})
        //Prevents multi-voting
        if(userVotes > votes){return setUserVotes(currentVotes=>{return --currentVotes})}

        PATCHvote(article_id, {inc_votes: 1})
        .then(()=>{})
        .catch((error)=>{
            setUserVotes(currentVotes=>{return --currentVotes})
        })

    }

    return (
        <section className="ArticleVote">
            <button onClick={()=>{adder(article_id, votes)}}>{'Votes: ' + userVotes}</button>
        </section>

    )

}