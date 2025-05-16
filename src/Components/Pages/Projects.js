import { FaArrowAltCircleLeft, FaExternalLinkAlt, FaGithub, FaSpotify } from "react-icons/fa"
import { Link } from 'react-router-dom';
import INTRSPCT from '../../Assets/gifs/INTRSPCT.gif';
import Playlister from '../../Assets/stills/Playlister.png';
import Dashboard from '../../Assets/stills/Dashboard.jpeg';


export default function Software() {
  return (
    <>
      <div className="software">
        <div className="pageConatiner">
          <Link
              to={{ pathname: '/' }}
              style={{ textDecoration: "none"}}
              className="link" >
                < FaArrowAltCircleLeft className="back" size="1.5rem"/>
          </Link>
          <div className="pageBox">
            <div className="SpageOne">
              <span className="title">AO Playlists</span>
              <a href="https://open.spotify.com/user/315o6js2bgmqotzowgyhnoyz5t24" target="_blank" rel="noreferrer" className="linkTest"><FaSpotify size="2rem"/></a>
              <br/>
              <div className="pageVert">
                <img src={Playlister} border='0' alt='scroll through of web app'/>
                <br/>
                <div className="pageVertText">
                    <p className="pageVertText">Developed a Node.js server utilizing Puppeteer to scrape upcoming show information and automatically organize content into Spotify playlists</p>
                    <p className="pageVertText">Leveraged the Spotify API to generate dynamic, venue-specific playlists, creating a seamless user experience for venue discovery and music exploration</p>
                    <p className="pageVertText">Implemented MongoDB to store upcoming show data, enabling future enhancements such as personalized recommendations and user-specific alerts.</p>
                </div>
              </div>
            </div>
            <div className="SpageTwo">
              <span className="title">Home Dash</span>
              <br/>
              <div className="pageVert">
                <div style={{ filter: "blur(0.5px) contrast(1.2)" }}>
                  <img src={Dashboard} border='0' alt='scroll through of mobile app with tarot cards'/>
                </div>
                <br/>
                <div className="pageVertText">
                    <p className="pageVertText">Developed a modular React UI to dynamically display curated content across multiple canvases within a single space, transforming walls into data-driven visual displays</p>
                    <p className="pageVertText">Automated content transitions throughout the day, featuring artwork, transit updates, calendar events, Habitica tasks, to-do lists, weather, and time</p>
                    <p className="pageVertText">Integrated APIs from CTA, Art Institute of Chicago, Habitica, Google Calendar, and OpenWeather to provide real-time updates and maintain contextual relevance</p>
                </div>
              </div>
            </div>
             <div className="SpageFour">
              <span className="title">INTRSPCT</span>
              <a href="https://github.com/JGibbsWork/tarotQrApp" target="_blank" rel="noreferrer" className="linkTest"><FaGithub size="2rem"/></a>
              <br/>
              <div className="pageVert">
                <img src={INTRSPCT} border='0' alt='scroll through of mobile app with tarot cards'/>
                <br/>
                <div className="pageVertText">
                    <p className="pageVertText">Designed ground up build of React Native Expo application</p>
                    <p className="pageVertText">Created 78 unique QR based tarot cards with matching functionality to display meaning of each card in the application</p>
                    <p className="pageVertText">Managed data flow from printed product to end library to provide a novel way to do tarot readings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}