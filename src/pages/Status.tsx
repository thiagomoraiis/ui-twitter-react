import { FormEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Tweet } from '../components/Tweet'
import './Status.css'

export function Status(){
    const [newAnswer,setNewAnswer] = useState('')
    const [answer, setAnswer] = useState([
        'Verdade, viu',
        'concordo...',
    ]) 

    function createNewAnswer(event: FormEvent){
        event.preventDefault()

        setAnswer([newAnswer, ...answer])
        setNewAnswer('')
    }

    return (
        <main className="status">
            <Header title="Tweet" />
            <Tweet content="sei la hom" />

            <div className="separator"/>

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
                <label htmlFor="tweet">
                <img className="img-user-profile" src="https://github.com/thiagomoraiis.png" alt="" />
                <textarea 
                 value={newAnswer}
                 onChange={(event) => {
                    setNewAnswer(event.target.value)
                 }}
                 className='textarea-tweet' 
                 name="" id="tweet" 
                 placeholder="Tweet you answer"
                 >
                 </textarea>
                </label>

                <button className="status-button-submit" type="submit">Answer</button>
            </form>

            { answer.map(tweet => {
                return <Tweet key={tweet} content={tweet} />
            })}

        </main>
    )
}