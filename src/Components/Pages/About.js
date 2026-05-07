import { FaArrowAltCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom';

export default function About() {
  return (
      <div className="ABOUT">
        <div className="pageContainer">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="link">
            <FaArrowAltCircleLeft className="back" size="1.5rem" />
          </Link>
            <h2 className="aboutTitle">HEY, I'M JAMES</h2>
              <div className="aboutMe">
                <h4 className="aboutPullQuote">I love making complex things feel personal.</h4>
                <p className="aboutMe">Hotels, casinos, developer tools, playlists, recommendation engines. If there's a medium, there's an opportunity to delight.</p>
                <p className="aboutMe">I cut my teeth at Hard Rock designing sensory environments and brokering global partnerships. Hundreds of custom playlists, AV automations, scent profiling, custom video content, and larger-scale productions like light shows across entire gaming floors. A brand partnership I built with Crosley Record Players called Wax won the company's best brand idea that year.</p>
                <p className="aboutMe">I pivoted into software engineering at JPMorgan, where I've spent nearly five years working on a cloud-native platform used by millions of customers — focused on DevOps, internal tooling, and release engineering at Fortune 10 scale. That said, my free time has more interesting highlights.</p>
                <p className="aboutMe">To see a few examples of my personal software projects check here: <Link
                  to="/work"
                  style={{ textDecoration: "none" }}
                  className="link">
                    <span>CODE</span>
                </Link></p>
                <p className="aboutMe">I also coordinate volunteers for Pride Chicago, the largest all-volunteer Pride organization in the country — building up a structure that gives community members real ownership of the day and empowering 200+ people to make it shine.</p>
                <p className="aboutMe">When I'm not doing that, I'm usually building something I wished already existed. Whether that's displaying a rotation of museum artwork through custom projection mapping, surfacing local venue picks through a Spotify bot, or getting travel recommendations from a multi-agent app I built myself — I love bringing new things into the world and making experiences feel alive.</p>
                <p className="aboutMe">To see a few examples of the more creative projects I've taken on check here: <Link
                  to="/creative"
                  style={{ textDecoration: "none" }}
                  className="link">
                    <span>CRAFT</span>
                </Link></p>
                <h3>Based in Chicago. Always in the middle of something. Let's see what we can make together — <a href="https://drive.google.com/file/d/146WfBKp13_-PpxUoOd_gqOorx8FMdZWN/view?usp=sharing" target="_blank" rel="noreferrer">RESUME</a></h3>
              </div>
        </div>
      </div>
  )
}
