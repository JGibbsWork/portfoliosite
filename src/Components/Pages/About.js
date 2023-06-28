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
          <h2 className="aboutTitle">HEY THERE</h2>
          <div className="aboutMe">
            <h4 className="aboutMe">Software, media, and branding professional. Lover of refined experiences digital and physical. Creator of full stack applications.</h4>
            <p className="aboutMe">I'm a fan of things that feel like they make sense. While I cut my teeth in Hospitality and media, I now work in the Software Engineering space. This mix of background career experience gives me a different perspective on how to approach problems and how to consider solutions. I have contributed to open source projects and am currently employed in the FinTech space.</p>
            <p className="aboutMe">To see a few examples of software projects I've worked on check here: <Link
            to={{ pathname: '/projects' }}
            style={{ textDecoration: "none"}}
            className="link" >
                <span>SOFTWARE PROJECTS</span>
          </Link></p>
            <p className="aboutMe">For the last 5 years, I managed the "Vibe" of Hotels and Casinos by creating and implementing large-scale strategic, styled ambiance via lighting, music, scent, and media creation across the entire property.In a similar media realm, I also have experience collaborating with independent musicians and their teams to create lyric videos and other social media audio/visual assets.. In addition to media, I excel at securing and maintaining brand partnerships as well. During my time with Hard Rock, I combined forces with renowned music company Fender for a month-long guitar giveaway, and I launched a rental amenity program for Hard Rock Hotels Globally with Crosley Record players. I’m excited to build something great with you.</p>
            <p className="aboutMe">To see a few examples of the more creative projects I've taken on check here: <Link
            to={{ pathname: '/creative' }}
            style={{ textDecoration: "none"}}
            className="link" >
                <span>CREATIVE PROJECTS</span>
          </Link></p>
          <h3>Want to see more? Check out my resume here: <a href="https://drive.google.com/file/d/146WfBKp13_-PpxUoOd_gqOorx8FMdZWN/view?usp=sharing" target="_blank" rel="noreferrer" >RESUME</a></h3>
          </div>
        </div>
      </div>
    </>
  )
}