import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'
import { Link } from 'react-router-dom'

interface TweetProps{
    content:string
}

export function Tweet(props:TweetProps){
    return (
        <Link className="tweet" to="/tweet">
            <img className="img-user-profile" src="https://github.com/thiagomoraiis.png" alt="" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Thiago Morais</strong>
                    <span>@thiagomoraiis</span>
                </div>

                <p>{ props.content }</p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        20
                    </button>

                    <button type="button">
                        <ArrowsClockwise />
                        20
                    </button>

                    <button type="button">
                        <Heart />
                        20
                    </button>
                </div>
            </div>
        </Link>
    )
} 