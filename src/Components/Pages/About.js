import { FaArrowAltCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="ABOUT">
        <div className="pageConatiner">
          <Link
            to={{ pathname: '/' }}
            style={{ textDecoration: "none" }}
            className="link">
            <FaArrowAltCircleLeft className="back" size="1.5rem" />
          </Link>
          <h2 className="aboutTitle">ABOUT</h2>
          <div className="aboutMe">
            <h4 className="aboutMe">
              Senior Software Engineer III at JPMorgan Chase. Building toward Series A–C startups in music, creative tools, or developer tooling.
            </h4>

            <p className="aboutMe">
              Before I wrote software professionally, I managed atmosphere. Spent my twenties at Hard Rock Hotels designing the sensory experience of a room — A/V environments, lighting rigs, scent programs, branded media. That work was fundamentally about systems thinking: what inputs create what feelings, and how do you make them consistent at scale. I launched a global amenity program with Crosley Record Players across Hard Rock properties worldwide, and brokered a Fender partnership that ran a month-long guitar giveaway. The skill set was closer to engineering than it looked.
            </p>

            <p className="aboutMe">
              I also DJ and produce music — that part hasn't stopped.
            </p>

            <p className="aboutMe">
              I came into software through that same lens: what does the system actually do, and does it feel right to the person using it? Since 2021 I've been at JPMorgan Chase, moving from SE I to Senior Software Engineer III. I work on internal tooling used by 200+ engineers — the kind of infrastructure where correctness isn't negotiable and downtime is someone's bad quarter. Led a zero-downtime Kubernetes migration across 32 clusters. AWS Certified.
            </p>

            <p className="aboutMe">
              What I'm looking for next is a smaller team with a harder problem in a space I care about — music, creative tools, or developer infrastructure. If you're building something in that territory and want someone who's shipped at scale and thinks about the full experience of a product, let's talk.
            </p>

            <p className="aboutMe">
              See what I've been building:{" "}
              <Link to={{ pathname: '/work' }} style={{ textDecoration: "none" }} className="link">
                <span>WORK</span>
              </Link>
              {" "}· See the creative side:{" "}
              <Link to={{ pathname: '/creative' }} style={{ textDecoration: "none" }} className="link">
                <span>CREATIVE</span>
              </Link>
            </p>

            <h3>
              Resume:{" "}
              <a href="https://drive.google.com/file/d/146WfBKp13_-PpxUoOd_gqOorx8FMdZWN/view?usp=sharing" target="_blank" rel="noreferrer">
                RESUME
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}
