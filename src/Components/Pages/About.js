import { FaArrowAltCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="NAME">
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
            <h4>Software, media and branding professional. Lover of experiences digital and physical and creator of full stack applications.</h4>
            <p>I'm a firm believer of the small details most peole overlook being the real magic of a product. </p>
            <p>I appreciate things that feel like they make sense. </p>
          </div>
        </div>
      </div>
    </>
  )
}