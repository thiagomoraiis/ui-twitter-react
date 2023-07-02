import { Header } from "../components/Header"
import { Tweet } from "../components/Tweet"
import './Timeline.css'

const tweets = [
    'DEU CERTO CARAi',
    'Palmeiras não tem mundial',
  ]

export function Timeline(){
    return (
        <main className="time-line">
          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="">
              <img className="img-user-profile" src="https://github.com/thiagomoraiis.png" alt="" />
              <textarea className='textarea-tweet' name="" id="tweet" placeholder="What's happening?"></textarea>
            </label>

            <button className="timeline-button-submit" type="submit">Submit</button>
          </form>

          <div className="separator"/>
          
          { tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet} />
          })}

        </main>
    )
}