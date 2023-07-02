import './Sidebar.css'
import '../global.css'
import twitterLogo from '../assets/logo-twiitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User} from 'phosphor-react'

export function Sidebar(){
    return (
        <aside className="sidebar">
        <img className="logo" src={ twitterLogo } alt="Logo" />

        <nav className="main-navegation">
          <a className="active" href="">
            <House weight='fill' />
            Home
          </a>
          <a href="#">
            <Hash />
            Explore
          </a>
          <a href="#">
            <Bell />
            Notifications
          </a>
          <a href="#">
            <Envelope />
            Messages
          </a>
          <a href="#">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="#">
            <FileText />
            List
          </a>
          <a href="#">
            <User />
            Profile
          </a>
          <a href="#">
            <DotsThreeCircle />
            More
          </a>
        </nav>

        <button className="new-tweet" >Tweet</button>
      </aside>
    )
}