import { FaArrowAltCircleLeft, FaExternalLinkAlt } from "react-icons/fa"
import { Link } from 'react-router-dom';
import guitar from '../../Assets/gifs/Guitar.gif';
import record from '../../Assets/stills/Record.jpg';

export default function Creative() {
  return (
      <div className="creative">
        <div className="pageContainer">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="link">
            <FaArrowAltCircleLeft className="back" size="1.5rem" />
          </Link>
            <h2 className="pageTitle">CRAFT</h2>

          {/* Multimedia / AV Work */}
          <div className="projectRow">
            <div className="projectMeta">01</div>
            <div className="projectRowInner">
              <div className="projectImageWrap">
                <img src={guitar} alt="LED guitar string installation" loading="lazy" />
              </div>
              <div className="projectTextWrap">
                <h2 className="projectTitle">Multimedia / AV Work</h2>
                <div className="projectInsight">
                  "Match the energy of the space. Or change it entirely."
                </div>
                <p className="projectDesc">
                  Designed and operated AV installations across a full hospitality property — from subtle time-of-day video playlists at check-in to a smoldering red and orange chandelier piece on the gaming floor that shifted to full RGB for promotional giveaways. Outdoor spaces got themed lighting treatments — branded, seasonal, and event-driven — that turned the property into a backdrop for whatever moment needed making. The job was always the same: read the room, then decide where to take it.
                </p>
                <div className="projectStack">LED Programming · After Effects · Resolume · Premiere · Environmental Design</div>
              </div>
            </div>
          </div>

          {/* Music & Lifestyle Branding */}
          <div className="projectRow">
            <div className="projectMeta">02</div>
            <div className="projectRowInner reverse">
              <div className="projectImageWrap">
                <img src={record} alt="Record player setup" loading="lazy" />
              </div>
              <div className="projectTextWrap">
                <h2 className="projectTitle">Music & Lifestyle Branding</h2>
                <div className="projectInsight">
                  "Every guest has a soundtrack. We just helped them play it."
                </div>
                <p className="projectDesc">
                  Created WAX, an extension of Hard Rock's Sound of Your Stay program that brought curated vinyl and a Crosley record player directly to guests' rooms on request. Pick your genre — rock, soul, pop — and a bellstaff member would arrive with the player and a handpicked crate, yours for the rest of the stay. Built on the same instinct as the existing Fender guitar rental program, WAX gave guests a softer, more intimate way to make music part of their stay. The program won Hard Rock's best brand idea that year.
                </p>
                <div className="projectStack">Brand Strategy · Partnership Development · Playlist Curation · Event Production</div>
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
                  loading="lazy"
                  style={{ width: '100%', aspectRatio: '16/9' }}
                ></iframe>
              </div>
              <div className="projectTextWrap">
                <h2 className="projectTitle">Lyric Videos</h2>
                <div className="projectInsight">
                  "Great songs deserve more than a static image."
                </div>
                <p className="projectDesc">
                  Created lyric videos and social assets for independent artists Royal Teeth, Post Precious, and Yoke Lore — working directly with each artist to translate their vision into motion. Ranged from clean kinetic typography to hand-drawn overlapping styles to animated album artwork, built on quick turnarounds without sacrificing the feel of the track.
                </p>
                <div className="projectStack">After Effects · Motion Graphics · Typography · Social Media Assets</div>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}
