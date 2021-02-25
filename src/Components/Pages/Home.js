import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <div className="NAME">
        <div className="homeBox">
          <div className="myName">
            <span className="hometext">James <br/>
            Gibbs</span>
          </div>
          <div className="navLinks">
            <div>
              <Link
              to={{ pathname: '/about' }}
              style={{ textDecoration: "none"}}
              className="link" >
                <h3>ABOUT ME</h3>
              </Link>
            </div>
            <div>
              <Link to={{ pathname: '/projects'  }}
              style={{ textDecoration: "none"}}
              className="link" >
                <h3>SOFTWARE PROJECTS</h3>
              </Link>
            </div>
            <div>
              <Link to={{ pathname: '/creative' }}
              style={{ textDecoration: "none"}}
              className="link" >
                <h3>CREATIVE PROJECTS</h3>
              </Link>
            </div>
          </div>
          <div className="iconLinks" >
            <div className="icons">
              <a href="https://www.linkedin.com/in/jgibbswork/" target="_blank" rel="noreferrer">
                <FaLinkedin size="2rem" />
              </a>
            </div>
            <div className="icons">
              <a href="https://github.com/JGibbsWork" target="_blank" rel="noreferrer" >
                <FaGithubSquare size="2rem" />
              </a>
            </div>
            <div className="icons">
              <a href="mailto: james.gibbs@me.com" target="_blank" rel="noreferrer">
                <FaEnvelope size="2rem"/>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

