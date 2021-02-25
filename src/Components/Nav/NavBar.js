import { Link } from 'react-router-dom';

export default function NavBar () {

  return (
    <div className="header">
        <div>
        <Link to={{ pathname: '/' }}
          style={{ textDecoration: "none"}}
          className="link" >
          <h3>HOME</h3>
        </Link>
      </div>
      <div>
        <Link
        to={{ pathname: '/about' }}
        style={{ textDecoration: "none"}}
        className="link" >
          <h3>ABOUT</h3>
        </Link>
      </div>
      <div>
        <Link to={{ pathname: '/projects'  }}
        style={{ textDecoration: "none"}}
        className="link" >
          <h3>PROJECTS</h3>
        </Link>
      </div>
      <div>
        <Link to={{ pathname: '/creative' }}
        style={{ textDecoration: "none"}}
        className="link" >
          <h3>CREATIVE</h3>
        </Link>
      </div>
      <div>
        <Link to={{ pathname: '/contact' }}
        style={{ textDecoration: "none"}}
        className="link" >
          <h3>CONTACT</h3>
        </Link>
      </div>
    </div>
  )
}