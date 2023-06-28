import { FaArrowAltCircleLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { Link } from 'react-router-dom';
import INTRSPCT from '../../Assets/gifs/INTRSPCT.gif';
import Ink from '../../Assets/gifs/InkU.gif';
import FEI from '../../Assets/gifs/FEIU.gif';
import Gamet from '../../Assets/gifs/GametU.gif';


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
            <div className="SpageOne">
              <span className="title">Inkorporate</span>
              <br/>
              <div className="pageVert">
                <img src={Ink} border='0' alt='scroll through of web app'/>
                <br/>
                <div className="pageVertText">
                    <p className="pageVertText">Implemented React Router to allow data persistence throughout page navigation</p>
                    <p className="pageVertText">Created Post-View module in React to display details on products used and photos of finished tattoo work</p>
                    <p className="pageVertText">Created put functionality using axios to update RESTful API allowing user to keep track of updates to work</p>
                </div>
              </div>
            </div>
            <div className="SpageTwo">
              <span className="title">INTRSPCT</span>
              <a href="https://github.com/JGibbsWork/tarotQrApp" target="_blank" rel="noreferrer" className="linkTest"><FaGithub size="2rem"/></a>
              <br/>
              <div className="pageVert">
                <img src={INTRSPCT} border='0' alt='scroll through of mobile app with tarot cards'/>
                <br/>
                <div className="pageVertText">
                    <p className="pageVertText">Designed ground up build of React Native Expo application</p>
                    <p className="pageVertText">Created 78 unique QR based tarot cards with matching functionality to display meaning of each card in the application</p>
                    <p className="pageVertText">Managed data flow from printed product to end library to provide a novel way to do tarot readings</p>
                </div>
              </div>
            </div>
            <div className="SpageThree">
                <span className="title">FEI</span>
                <a href="https://github.com/JGibbsWork/reviewFEI" target="_blank" rel="noreferrer" className="linkTest"><FaGithub size="2rem"/></a>
              <br/>
              <div className="pageVert">
                <img src={FEI} border='0' alt='scroll through of web app'/>
                <br/>
                <div className="pageVertText">
                  <p className="pageVertText">Created fullstack review component to dynamically display reviews tied to a specific item</p>
                  <p className="pageVertText">Implemented sorting algorithms to filter and sort content based on user selected parameters</p>
                  <p className="pageVertText">Dockerized image to run a microservice on a webapp proxy on an AWS EC2 instance</p>
                </div>
              </div>
            </div>
            <div className="SpageFour">
              <span className="title">Gamet</span>
              <br/>
              <div className="pageVert">
                <img src={Gamet} border='0' alt='scroll through of notes'/>
                <br/>
                <div className="pageVertText">
                  <p className="pageVertText">Benchmarked mongoDB and PostgreSQL API calls with 10 million data entries</p>
                  <p className="pageVertText">Restructured database schema and data structure to bring response times from 6s to below 1ms locally</p>
                  <p className="pageVertText">Scaled to 4 applications hosted on AWS EC2 instances and implemented an Nginx load balancer utilizing the round robin load balancing method to handle 1000 requests per second with a less than 1% error rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}