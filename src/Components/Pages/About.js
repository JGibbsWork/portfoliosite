import { FaArrowAltCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="ABOUT">
        <div className="pageConatiner">
          <Link
            to={{ pathname: '/' }}
            style={{ textDecoration: "none"}}
            className="link" >
                < FaArrowAltCircleLeft className="back" size="1.5rem"/>
          </Link>
          <a href="https://drive.google.com/file/d/122vC6CgYJJ8k8qCXzwx6vj3r-I0d2Ilm/view?usp=sharing" target="_blank" rel="noreferrer" >
            <span className="resume">RESUME</span>
          </a>
          <h2 className="aboutTitle">HEY THERE</h2>
          <div className="aboutMe">
            <h4 className="aboutMe">Software, media and branding professional. Lover of experiences digital and physical and creator of full stack applications.</h4>
            <p className="aboutMe">I'm a fan of things that feel like they make sense. While I cut my teeth in Hospitality and media I have recently gravitated toward Software Development. I know how and when to be using specific technologies. Whether creating RESTful APIs with Express, choosing the right database option, building a front end React application, or building for scale and load balancing with Nginx. I can handle a variety of challenges for your team.</p>
            <p className="aboutMe">To see a few examples of software projects I've worked on check here: <Link
            to={{ pathname: '/projects' }}
            style={{ textDecoration: "none"}}
            className="link" >
                <span>SOFTWARE PROJECTS</span>
          </Link></p>
            <p className="aboutMe">For the last 5 years I have managed the "Vibe" of Hotels and Casinos. From ambiance styling with lighting, music and scent to media creation for large scale projects I have you covered. On the off chance smaller projects are more your speed, I have created multiple lyric videos for independent bands and take on small video editing projects. If media isn't something you are after I can manage a brand partnership with ease. I have combined forces with Fender for a month long guitar giveaway and launched a global amenity program with Crosley Record players. I can help build something great with you.</p>
            <p className="aboutMe">To see a few examples of the more creative projects I've taken on check here: <Link
            to={{ pathname: '/creative' }}
            style={{ textDecoration: "none"}}
            className="link" >
                <span>CREATIVE PROJECTS</span>
          </Link></p>
          </div>
        </div>
      </div>
    </>
  )
}