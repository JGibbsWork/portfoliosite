import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const descriptors = [
  'Senior Software Engineer',
  'Experience Designer',
  'Music Snob',
  'Distant Relative of Paul Bunyon',
  'Vibe Manager',
  'Creative Technologist',
  'Emergency DJ',
  'Builder of Memories',
  'Volunteer Coordinator',
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % descriptors.length);
        setVisible(true);
      }, 400); // wait for fade-out before swapping text
    }, 2600);
    return () => clearInterval(cycle);
  }, []);

  return (
    <>
      <div className="Home">
        <div className="homeBox">
          <div className="myName">
            <span className="hometext">James <br/>
            Gibbs</span>
            <div
              className="homeSubtitle"
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }}
            >
              {descriptors[index]}
            </div>
          </div>
          <div className="navLinks">
            <div>
              <Link
              to={{ pathname: '/about' }}
              style={{ textDecoration: "none"}}
              className="link" >
                <h3>ABOUT</h3>
              </Link>
            </div>
            <div>
              <Link to={{ pathname: '/work'  }}
              style={{ textDecoration: "none"}}
              className="link" >
                <h3>WORK</h3>
              </Link>
            </div>
            <div>
              <Link to={{ pathname: '/creative' }}
              style={{ textDecoration: "none"}}
              className="link" >
                <h3>CREATIVE</h3>
              </Link>
            </div>
          </div>
          <div className="iconLinks" >
            <div className="icons" id="homeLink">
              <a href="https://www.linkedin.com/in/jgibbswork/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
            <div className="icons" id="homeLink">
              <a href="https://github.com/JGibbsWork" target="_blank" rel="noreferrer" >
                <FaGithubSquare  />
              </a>
            </div>
            <div className="icons" id="homeLink">
              <a href="mailto: james.gibbs@me.com" target="_blank" rel="noreferrer">
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}