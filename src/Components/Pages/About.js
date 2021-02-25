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
                < FaArrowAltCircleLeft />
          </Link>
          <h2>WHO IS SHE?</h2>
          <h5>Software, media and branding professional. Lover of experiences digital and physical and creator of full stack applications.</h5>
          <p>California born and raised</p>
          <br/>
          <p>I appreciate things that feel like they make sense. Whether thats a whiskey neat at a dive bar, a scented candle at a yoga class, or a short rib grilled cheese sandwhich. </p>
          <a href="https://drive.google.com/file/d/122vC6CgYJJ8k8qCXzwx6vj3r-I0d2Ilm/view?usp=sharing" target="_blank" rel="noreferrer">
            <span>RESUME</span>
          </a>
        </div>
      </div>
    </>
  )
}