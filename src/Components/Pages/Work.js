import { FaArrowAltCircleLeft, FaSpotify } from "react-icons/fa"
import { Link } from 'react-router-dom';
import Playlister from '../../Assets/stills/Playlister.png';
import Dashboard from '../../Assets/stills/Dashboard.jpeg';

export default function Work() {
  return (
    <>
      <div className="software">
        <div className="pageConatiner">
          <Link
            to={{ pathname: '/' }}
            style={{ textDecoration: "none" }}
            className="link">
            <FaArrowAltCircleLeft className="back" size="1.5rem" />
          </Link>

          {/* Trivlio */}
          <div className="projectRow">
            <div className="projectMeta">01</div>
            <div className="projectRowInner">
              <div className="projectImageWrap">
                <div className="trivlioPlaceholder">
                  <span>People remember cities by how neighborhoods felt, not which landmarks they hit.</span>
                </div>
              </div>
              <div className="projectTextWrap">
                <h2 className="projectTitle">Trivlio</h2>
                <div className="projectInsight">
                  "People remember cities by how neighborhoods felt, not which landmarks they hit."
                </div>
                <p className="projectDesc">
                  Built a multi-agent travel planning engine that clusters recommendations by neighborhood feel and proximity. Each agent handles a distinct planning concern — dining, lodging, activities — then a coordinator layer stitches results into a coherent itinerary shaped around how areas actually feel to move through.
                </p>
                <div className="projectStack">Node.js · Express · MongoDB · OpenAI · Docker · Heroku</div>
              </div>
            </div>
          </div>

          {/* Amuse Orielle */}
          <div className="projectRow">
            <div className="projectMeta">02</div>
            <div className="projectRowInner reverse">
              <div className="projectImageWrap">
                <img src={Playlister} alt="Amuse Orielle playlist interface" />
              </div>
              <div className="projectTextWrap">
                <h2 className="projectTitle">Amuse Orielle</h2>
                <div className="projectInsight">
                  "Chicago venues have a sound shaped by their bookers — there was no way to hear it before showing up."
                </div>
                <p className="projectDesc">
                  Scrapes live show listings and auto-generates weekly Spotify playlists per venue, so you can hear a room's actual programming before you walk in. LLM pipeline runs on Ollama/Qwen locally with OpenAI as fallback. Self-hosted on local hardware with a GitHub Actions CI/CD pipeline deploying to an ARM64 runner.
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
                <img src={Dashboard} alt="Home Dashboard display" style={{ filter: "blur(0.5px) contrast(1.2)" }} />
              </div>
              <div className="projectTextWrap">
                <h2 className="projectTitle">Home Dash</h2>
                <div className="projectInsight">
                  "Walls should work harder — showing exactly what matters, exactly when it matters."
                </div>
                <p className="projectDesc">
                  Developed a modular React UI to dynamically display curated content across multiple canvases within a single space, transforming walls into data-driven visual displays. Automated content transitions throughout the day, featuring artwork, transit updates, calendar events, Habitica tasks, to-do lists, weather, and time. Integrated APIs from CTA, Art Institute of Chicago, Habitica, Google Calendar, and OpenWeather to provide real-time updates and maintain contextual relevance.
                </p>
                <div className="projectStack">React · REST APIs · Art Institute of Chicago · CTA · OpenWeather</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
