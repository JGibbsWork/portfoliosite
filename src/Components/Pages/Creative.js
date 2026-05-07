import { FaArrowAltCircleLeft, FaExternalLinkAlt } from "react-icons/fa"
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
            style={{ textDecoration: "none" }}
            className="link">
            <FaArrowAltCircleLeft className="back" size="1.5rem" />
          </Link>

          {/* Multimedia / AV Work */}
          <div className="projectRow">
            <div className="projectMeta">01</div>
            <div className="projectRowInner">
              <div className="projectImageWrap">
                <img src={guitar} alt="LED guitar string installation" />
              </div>
              <div className="projectTextWrap">
                <h2 className="projectTitle">Multimedia / AV Work</h2>
                <div className="projectInsight">
                  "Scale and specificity aren't opposites — a 50ft LED screen can still feel personal."
                </div>
                <p className="projectDesc">
                  Designed and produced large-scale audio-visual show pieces for a 50ft curved LED screen and LED guitar string monument at Hard Rock San Diego. Created immersive experiences for sales sites on the 28ft screen behind check-in, and built encompassing light show activations across the rooftop space. Each piece balanced spectacle with the intimate feel a hospitality environment demands.
                </p>
                <div className="projectStack">LED Programming · After Effects · Audio Sync · Environmental Design</div>
              </div>
            </div>
          </div>

          {/* Music & Lifestyle Branding */}
          <div className="projectRow">
            <div className="projectMeta">02</div>
            <div className="projectRowInner reverse">
              <div className="projectImageWrap">
                <img src={record} alt="Record player setup" />
              </div>
              <div className="projectTextWrap">
                <h2 className="projectTitle">Music & Lifestyle Branding</h2>
                <div className="projectInsight">
                  "Won Hard Rock's best brand idea that year — a partnership that put vinyl in every room."
                </div>
                <p className="projectDesc">
                  Established a global partnership with Hard Rock Hotels and Crosley Radio to launch Sound of Your Stay's "WAX" addition — putting record players and curated vinyl in guest rooms worldwide. Curated over 50 playlists to play at specific times in specific spaces across the property. Produced pop-up events for special occasions and brokered partnerships with local radio stations for on-site artist interviews.
                </p>
                <div className="projectStack">Brand Strategy · Playlist Curation · Partnership Development · Event Production</div>
                <div className="projectLinks">
                  <a href="https://www.hardrockhotels.com/sound-of-your-stay.aspx" target="_blank" rel="noreferrer" className="projectLink">
                    <FaExternalLinkAlt style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    Sound of Your Stay
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Lyric Videos */}
          <div className="projectRow">
            <div className="projectMeta">03</div>
            <div className="projectRowInner">
              <div className="projectImageWrap">
                <iframe
                  title="YouTube Playlist"
                  src="https://www.youtube.com/embed/videoseries?list=PLXPVKAMcnbkx0ynxJEsJZYiD1N_zrLBrH"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ width: '100%', aspectRatio: '16/9' }}
                ></iframe>
              </div>
              <div className="projectTextWrap">
                <h2 className="projectTitle">Lyric Videos</h2>
                <div className="projectInsight">
                  "A lyric video isn't karaoke — it's a chance to extend the song's world."
                </div>
                <p className="projectDesc">
                  Conceptualized and created lyric videos, along with accompanying social media assets, for songs released by independent artists Royal Teeth (Round Hill Records), Post Precious (side project of Max Hershenow of MS MR + veteran singer/songwriter Alex Winston), and Yoke Lore. Ranging from singles and albums to visuals for karaoke-themed listening parties.
                </p>
                <div className="projectStack">After Effects · Typography · Motion Graphics · Social Media Assets</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
