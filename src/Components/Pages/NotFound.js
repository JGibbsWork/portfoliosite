import { FaArrowAltCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
      <div className="ABOUT">
        <div className="pageContainer">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="link">
            <FaArrowAltCircleLeft className="back" size="1.5rem" />
          </Link>
          <h2 className="aboutTitle">404</h2>
          <div className="aboutMe">
            <p className="aboutMe">Page not found. Let's get you back on track.</p>
            <Link to="/" className="link">
              <h3>Back to Home</h3>
            </Link>
          </div>
        </div>
      </div>
  )
}
