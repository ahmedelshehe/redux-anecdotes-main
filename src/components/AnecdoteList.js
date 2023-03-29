import { useSelector, useDispatch } from 'react-redux'
import {voteForAnecdote } from '../reducers/anecdoteReducer'
import {setNotification } from '../reducers/notificationReducer'
const Anecdote = ({anecdote}) => {
    const dispatch = useDispatch()

    const vote =async (id,content) => {
        dispatch(voteForAnecdote(id))
        dispatch(setNotification(content,10))
    }
    return (
        <div >
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
              </div>
        </div>
    )
}
const AnecdoteList = () => {
    const anecdotes = useSelector(({anecdotes ,filter}) =>{
        if(filter === ''){
            return [...anecdotes].sort((a,b) =>  b.votes - a.votes )
        }else {
            return anecdotes.filter((anecdote) =>{
                if(anecdote.content.toLowerCase().search(filter.toLowerCase()) === -1) {
                    return null
                }else {
                    return anecdote
                }
            }).sort((a,b) =>  b.votes - a.votes )
        }
    })
    return (
        anecdotes.map(anecdote =>
            <Anecdote anecdote={anecdote} key={anecdote.id}/>
          )
    )
}
export default AnecdoteList