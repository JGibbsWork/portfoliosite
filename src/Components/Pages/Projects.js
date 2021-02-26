import { FaArrowAltCircleLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { Link } from 'react-router-dom';
import Ink from '../../Assets/gifs/Ink.gif';
import FEI from '../../Assets/gifs/FEI.gif';
import Gamet from '../../Assets/gifs/Gamet.gif';



import inkstill from '../../Assets/stills/Ink.jpg';


export default function Software() {
  return (
    <>
      <div className="software">
        <div className="pageConatiner">
          <Link
              to={{ pathname: '/' }}
              style={{ textDecoration: "none"}}
              className="link" >
                < FaArrowAltCircleLeft className="back" size="1.5rem"/>
          </Link>
          <div className="pageBox">
            <div className="pageOne">
              <span className="title">Inkorporate</span>
              <a href="https://inkrprate.herokuapp.com/" target="_blank" rel="noreferrer" className="linkTest"> <FaExternalLinkAlt size="2rem"/></a>
              <br/>
              <img src={Ink} border='0' alt='scroll through of web app'/>
              <br/>
                <p>Implemented React Router to allow data persistence
                  throughout page navigation</p>
                <p>Created Post-View module in React to display details on
                  products used and photos of finished tattoo work</p>
                <p>Created put functionality using axios to update RESTful API allowing user to keep track of updates to work</p>
            </div>
            <div className="pageTwo">
                <span className="title">FEI</span>
                <a href="https://fei-reviews.herokuapp.com/" target="_blank" rel="noreferrer" className="linkTest"><FaExternalLinkAlt size="2rem"/></a>
                <a href="https://github.com/JGibbsWork/reviewFEI" target="_blank" rel="noreferrer" className="linkTest"><FaGithub size="2rem"/></a>
              <br/>
              <img src={FEI} border='0' alt='scroll through of web app'/>
              <br/>
                  <p>Created fullstack review component to dynamically display
                    reviews tied to a specific item</p>
                  <p>Implemented sorting algorithms to filter and sort content
                    based on user selected parameters</p>
                  <p>Dockerized image to run a microservice on a webapp proxy
                    on an AWS EC2 instance</p>
            </div>
            <div className="pageThree">
              <span className="title">Gamet</span>
              <br/>
              <img src={Gamet} border='0' alt='scroll through of notes'/>
              <br/>
                <p>Benchmarked mongoDB and PostgreSQL API calls with 10
                  million data entries</p>
                <p>Restructured database schema and data structure to bring
                  response times from 6s to below 1ms locally</p>
                <p>Scaled to 4 applications hosted on AWS EC2 instances and
                  implemented an Nginx load balancer utilizing the round robin load balancing method to handle 1000 requests per second with a less than 1% error rate</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}