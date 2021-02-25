import { FaArrowAltCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom';

export default function Creative() {
  return (
    <>
      <div className="NAME">
        <div className="pageConatiner">
          <div>
            <Link
              to={{ pathname: '/' }}
              style={{ textDecoration: "none"}}
              className="link" >
                < FaArrowAltCircleLeft />
            </Link>
            <div>LYRIC VIDEOS</div>
              <ul>
                <li>Created Lyric Videos for singles released by Royal Teeth and Post Precious.</li>
                <li>Ranging from singles to visuals for Karaoke themed listening parties</li>
              </ul>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLXPVKAMcnbkx0ynxJEsJZYiD1N_zrLBrH" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <div>
            <div>MULTIMEDIA PROJECTS</div>
            <iframe src="https://giphy.com/embed/vHK5Ii4j7VsueHN8de" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/vHK5Ii4j7VsueHN8de"></a></p>
            <ul>
              <li>Large scale Audio Visual Show pieces for a 50ft curved LED screen and LED Guitar string monument.</li>
              <li>Immersive experiences for sales sites on the 28ft screen behing check in desk at Hard Rock San Diego.</li>
              <li>Encompasing light show actvations at rooftop of Hard Rock San Diego.</li>
            </ul>
          </div>
          <div>
            <div>MUSIC LIFESTYLE BRANDING</div>
            <img src='https://i.postimg.cc/3x19TVGW/IMG-0669.jpg' border='0' alt='IMG-0669'/>
            <ul>
              <li>Forged gloabl partnership with Hard Rock Hotels and Crosley Radio. Launched Sound of Your Stay addition "WAX." Curated records and a record player delivered to a guests room.</li>
              <li>Music Curation and Theme Concepting. Curated over 50 Playlists to play during specific times at specific places. </li>
              <li>Pop up events for special occasions at Hard Rock San Diego. Partnership created for on site interviews with local radio station guests. Impersonators on famous musicians birthdays.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}