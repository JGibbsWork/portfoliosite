import { FaArrowAltCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom';
import guitar from '../../Assets/gifs/Guitar.gif';
import record from '../../Assets/stills/Record.jpg';

export default function Creative() {
  return (
    <>
      <div className="creative">
        <div className="pageConatiner">
            <Link
              to={{ pathname: '/' }}
              style={{ textDecoration: "none"}}
              className="link" >
                < FaArrowAltCircleLeft className="back" size="1.5rem"/>
            </Link>
          <div className="pageBox">
            <div className="pageOne">
              <span className="Creatitle">MULTIMEDIA PROJECTS</span>
              <img src={guitar} />
                <p>Large scale Audio Visual Show pieces for a 50ft curved LED screen and LED Guitar string monument.</p>
                <p>Immersive experiences for sales sites on the 28ft screen behing check in desk at Hard Rock San Diego.</p>
                <p>Encompasing light show actvations at rooftop of Hard Rock San Diego.</p>
            </div>
            <div className="pageTwo">
              <span className="Creatitle">MUSIC LIFESTYLE BRANDING</span>
              <img src={record} border='0' alt='pizza and record player'/>
                <p>Forged gloabl partnership with Hard Rock Hotels and Crosley Radio. Launched Sound of Your Stay addition "WAX.".</p>
                <p>Music Curation and Theme Concepting. Curated over 50 Playlists to play during specific times at specific places. </p>
                <p>Pop up events for special occasions at Hard Rock San Diego. Partnership created for on site interviews with local radio station guests. </p>
            </div>
            <div className="pageThree">
              <span className="Creatitle">LYRIC VIDEOS</span>
                <iframe
                title="YouTube Playlist"
                src="https://www.youtube.com/embed/videoseries?list=PLXPVKAMcnbkx0ynxJEsJZYiD1N_zrLBrH"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen></iframe>
                  <p>Created Lyric Videos for singles released by Royal Teeth and Post Precious.</p>
                  <p>Ranging from singles to visuals for Karaoke themed listening parties</p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}