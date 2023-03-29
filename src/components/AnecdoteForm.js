import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote =async (event) => {
        event.preventDefault()
        const content = event.target.ancedote.value
        event.target.ancedote.value = ''
        dispatch(createAnecdote(content))
      }
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
            <div><input name='ancedote'/></div>
            <button>create</button>
            </form>
        </>
    )
}
export default AnecdoteForm