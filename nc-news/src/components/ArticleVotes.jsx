import { useState, useEffect } from 'react';
import { PATCHvote } from '../utils/apis.jsx';

//Dodgy bug: voting updates article date as PSQL is updating date field!!!

export default function ArticleVotes({article: {article_id, votes}}){
    const [userVotes, setUserVotes] = useState(votes)
    const [voteMessage, setVoteMessage] = useState('Please vote wisely.')

    function adder(article_id, votes){
        setUserVotes(currentVotes=>{return ++currentVotes})
        //Prevents multi-voting
        if(userVotes > votes){return setUserVotes(currentVotes=>{return --currentVotes})}

        PATCHvote(article_id, {inc_votes: 1})
        .then(()=>{})
        .catch((error)=>{
            setUserVotes(currentVotes=>{return --currentVotes})
            setVoteMessage('Your vote wasn\'t registered. Please vote again') 
        })
    }

    function minuser(article_id, votes){
        setUserVotes(currentVotes=>{return --currentVotes})
        //Prevents multi-voting
        if(userVotes < votes){return setUserVotes(currentVotes=>{return ++currentVotes})}

        PATCHvote(article_id, {inc_votes: -1})
        .then(()=>{})
        .catch((error)=>{
            setUserVotes(currentVotes=>{return ++currentVotes})
            setVoteMessage('Your vote wasn\'t registered. Please vote again') 
        })
    }


    useEffect(()=>{
        if(userVotes === votes + 1){
            setVoteMessage('You\'ve only one vote!')
        }else if(userVotes < votes){
           setVoteMessage('You\'ve only one vote!')
        }else if(userVotes === votes){ 
            setVoteMessage('Please vote wisely.')
        }    
    }, [userVotes])

    return (
        <section className="ArticleVote">
            <button onClick={()=>{adder( article_id, votes)}}>{'Yay: ' + userVotes}</button>
            <button onClick={()=>{minuser( article_id, votes)}}>{'Nay: ' + userVotes}</button>
            <p>{voteMessage}</p>
        </section>

    )
}