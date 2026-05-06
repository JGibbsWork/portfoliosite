import { FaArrowAltCircleLeft, FaGithub } from "react-icons/fa"
import { Link } from 'react-router-dom';

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

          <div className="sectionLabel">SOFTWARE</div>

          <div className="workGrid">
            <div className="projectCard">
              <span className="title">Trivlio</span>
              <div className="projectInsight">
                "People remember cities by how neighborhoods felt, not which landmarks they hit."
              </div>
              <p className="projectDesc">
                Built a multi-agent travel planning engine that clusters recommendations by neighborhood feel and proximity. Each agent handles a distinct planning concern — dining, lodging, activities — then a coordinator layer stitches results into a coherent itinerary shaped around how areas actually feel to move through.
              </p>
              <div className="projectImagePlaceholder" />
              <div className="projectStack">Node.js · Express · MongoDB · OpenAI · Docker · Heroku</div>
            </div>

            <div className="projectCard">
              <div className="projectCardHeader">
                <span className="title">Amuse Orielle</span>
                <a href="https://github.com/JGibbsWork" target="_blank" rel="noreferrer" className="linkTest">
                  <FaGithub size="2rem" />
                </a>
              </div>
              <div className="projectInsight">
                "Chicago venues have a sound shaped by their bookers — there was no way to hear it before showing up."
              </div>
              <p className="projectDesc">
                Scrapes live show listings and auto-generates weekly Spotify playlists per venue, so you can hear a room's actual programming before you walk in. LLM pipeline runs on Ollama/Qwen locally with OpenAI as fallback. Self-hosted on local hardware with a GitHub Actions CI/CD pipeline deploying to an ARM64 runner.
              </p>
              <div className="projectStack">Ollama · OpenAI · Spotify OAuth · MongoDB · GitHub Actions</div>
            </div>
          </div>

          <div className="sectionLabel">COMMUNITY</div>

          <div className="communityCard">
            <div className="communityCardHeader">
              <span className="communityTitle">PRIDEChicago</span>
              <span className="communityRole">Volunteer Coordinator · 2025–Present</span>
            </div>
            <p className="projectDesc">
              Grew the volunteer base from 40 to 200+. Built the infrastructure, role definitions, training materials, and recruitment pipelines needed to extend PRIDEChicago from a one-day event into a year-round nonprofit operation. Partnered with city officials, corporate sponsors, and community organizations. Deployed the full team to execute a 150-contingent parade on time and on budget.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
