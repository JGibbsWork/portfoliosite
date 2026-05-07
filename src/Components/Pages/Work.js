import { FaArrowAltCircleLeft, FaSpotify, FaExternalLinkAlt } from "react-icons/fa"
import { Link } from 'react-router-dom';
import Playlister from '../../Assets/stills/Playlister.png';
import Dashboard from '../../Assets/stills/Dashboard.jpeg';
import Trivlio from '../../Assets/stills/Trivlio.jpg';

export default function Work() {
  return (
      <div className="software">
        <div className="pageContainer">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="link">
            <FaArrowAltCircleLeft className="back" size="1.5rem" />
          </Link>
            <h2 className="pageTitle">CODE</h2>

          {/* Trvlio */}
          <div className="projectRow">
            <div className="projectMeta">01</div>
            <div className="projectRowInner">
              <div className="projectImageWrap">
                <img src={Trivlio} alt="Trvlio recommendations" loading="lazy" />
              </div>
              <div className="projectTextWrap">
                <h2 className="projectTitle">Trvlio</h2>
                <div className="projectInsight">
                  "The best day in a new city isn't the most efficient one — it's the most intentional one."
                </div>
                <p className="projectDesc">
                  Most travel apps optimize for popularity. Trvlio optimizes for feel. Pick a city, set your dates, and answer a few quick questions about pace, budget, and general interests — then instead of a ranked list of buzzy spots, you get a day built around a neighborhood that actually matches your vibe. Dining, activities, and lodging clustered in one area so you leave actually knowing a place.
                </p>
                <div className="projectStack">Node.js · Express · MongoDB · OpenAI · Amadeus · Google Places · Docker · Heroku</div>
                <div className="projectLinks">
                  <a href="https://trvlio.com" target="_blank" rel="noreferrer" className="projectLink">
                    <FaExternalLinkAlt style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    Trvlio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Amuse Orielle */}
          <div className="projectRow">
            <div className="projectMeta">02</div>
            <div className="projectRowInner reverse">
              <div className="projectImageWrap">
                <img src={Playlister} alt="Amuse Orielle playlist interface" loading="lazy" />
              </div>
              <div className="projectTextWrap">
                <h2 className="projectTitle">Amuse Orielle</h2>
                <div className="projectInsight">
                  "Hear the room before you're in it."
                </div>
                <p className="projectDesc">
                  Chicago's best venues don't just book shows — they have a sound, a taste, a scene that words can't quite capture. Amuse Orielle scrapes upcoming show listings and builds weekly Spotify playlists for each venue, so you can feel what a room is about before you walk in. Discover a new space, preview who's coming, and get a read on where the city's taste is heading.
                </p>
                <div className="projectStack">Ollama · OpenAI · Spotify OAuth · MongoDB · GitHub Actions</div>
                <div className="projectLinks">
                  <a href="https://open.spotify.com/user/315o6js2bgmqotzowgyhnoyz5t24" target="_blank" rel="noreferrer" className="projectLink">
                    <FaSpotify style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                    Spotify Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Home Dash */}
          <div className="projectRow">
            <div className="projectMeta">03</div>
            <div className="projectRowInner">
              <div className="projectImageWrap">
                <img src={Dashboard} alt="Home Dashboard display" loading="lazy" style={{ filter: "blur(0.5px) contrast(1.2)" }} />
              </div>
              <div className="projectTextWrap">
                <h2 className="projectTitle">Home Dash</h2>
                <div className="projectInsight">
                  "Any surface can be a canvas."
                </div>
                <p className="projectDesc">
                  A custom projection mapping app that turns any surface — a blank wall, a mounted canvas, a TV — into an ambient art display. Pulls from the Art Institute of Chicago, the Met, and the Cleveland Museum of Art to rotate through curated collections, always alongside live weather and CTA transit times. Built to expand: swap in calendar events, to-do lists, or algorithmically generated art on a whim. Art and information that blend into your space instead of competing with it.
                </p>
                <div className="projectStack">React · Art Institute of Chicago · Met Museum · Cleveland Museum · CTA · OpenWeather · Google Calendar</div>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}
