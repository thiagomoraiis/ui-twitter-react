import { Header } from '../components/Header'
import { Tweet } from '../components/Tweet'
import './Status.css'

const answer = [
    "Concordo, viu",
    "Verdade"
]

export function Status(){
    return (
        <main className="status">
            <Header title="Tweet" />
            <Tweet content="sei la hom" />

            <div className="separator"/>

            <form className="answer-tweet-form">
                <label htmlFor="tweet">
                <img className="img-user-profile" src="https://github.com/thiagomoraiis.png" alt="" />
                <textarea className='textarea-tweet' name="" id="tweet" placeholder="Tweet you answer"></textarea>
                </label>

                <button className="status-button-submit" type="submit">Answer</button>
            </form>

            { answer.map(tweet => {
                return <Tweet key={tweet} content={tweet} />
            })}

        </main>
    )
}