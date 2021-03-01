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
              <span className="Creatitle">MULTIMEDIA <br/> PROJECTS</span>
              <br/>
              <div className="pageVert">
                <img src={guitar} border="0" alt="whatever" />
                <div className="pageVertText">
                  <p className="pageVertText">Large scale Audio Visual Show pieces for a 50ft curved LED screen and LED Guitar string monument</p>
                  <p className="pageVertText">Immersive experiences for sales sites on the 28ft screen behing check-in desk at Hard Rock San Diego</p>
                  <p className="pageVertText">Encompasing light show actvations at rooftop of Hard Rock San Diego</p>
                </div>
              </div>
            </div>
            <div className="pageTwo">
              <span className="Creatitle">MUSIC & LIFESTYLE <br/>BRANDING</span>
              <div className="pageVert">
                <img src={record} border='0' alt='pizza and record player'/>
                <div className="pageVertText">
                  <p className="pageVertText">Established global partnership with Hard Rock Hotels and Crosley Radio. Launched Sound of Your Stay addition "WAX." <a href="https://www.hardrockhotels.com/sound-of-your-stay.aspx" target="_blank" rel="noreferrer">SEE MORE HERE</a> </p>
                  <p className="pageVertText">Music Curation and Theme Concepting. Curated over 50 Playlists to play during specific times at specific places </p>
                  <p className="pageVertText">Pop up events for special occasions at Hard Rock San Diego. Partnership created for on site interviews with local radio station guests</p>
                </div>
              </div>
            </div>
            <div className="pageThree">
              <span className="Creatitle">LYRIC <br/>VIDEOS</span>
              <br/>
              <div className="pageVert">
                <iframe
                title="YouTube Playlist"
                src="https://www.youtube.com/embed/videoseries?list=PLXPVKAMcnbkx0ynxJEsJZYiD1N_zrLBrH"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen></iframe>
                <div className="pageVertText">
                  <p className="pageVertText">Conceptualized and created Lyric Videos, along with accompanying social media assets, for songs released by independent artists Royal Teeth (Round Hill Records) and Post Precious (side project of Max Hershenow of MS MR + veteran singer/songwriter Alex Winston)</p>
                  <p className="pageVertText">Ranging from singles and albums to visuals for Karaoke-themed listening parties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}