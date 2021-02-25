import { FaArrowAltCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom';

export default function Software() {
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
          <div>
            <div>INKORPORATE</div>
            <iframe
            title="scroll of inkorporate webapp"
            src="https://giphy.com/embed/dr3pzKnLWNbt292s35"
            width="480"
            height="270"
            frameBorder="0"
            class="giphy-embed" allowFullScreen></iframe>
            <br/>
            <a href="https://inkrprate.herokuapp.com/" target="_blank" rel="noreferrer">SITE</a>
            <span>private repo</span>
            <ul>
              <li>Implemented React Router to allow data persistence
                throughout page navigation</li>
              <li>Created Post-View module in React to display details on
                products used and photos of finished tattoo work</li>
              <li>Created put functionality using axios to update RESTful API
                allowing user to keep track of updates to work</li>
            </ul>
          </div>
          <div>
            <div>FEI</div>
            <iframe
            title="scroll of FEI webapp"
            src="https://giphy.com/embed/h7ciUgHT9FB9jtSDPp"
            width="480"
            height="270"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen></iframe>
            <br/>
            <a>SITE</a>
            <a>Source Code</a>
              <ul>
                <li>Created fullstack review component to dynamically display
                  reviews tied to a specific item</li>
                <li>Implemented sorting algorithms to filter and sort content
                  based on user selected parameters</li>
                <li>Dockerized image to run a microservice on a webapp proxy
                  on an AWS EC2 instance</li>
              </ul>
          </div>
          <div>
            <div>Gamet</div>
            <iframe
            title="scroll of notes on performance"
            src="https://giphy.com/embed/41OYK62kxHipeSldrk"
            width="480"
            height="270"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen></iframe>
            <br/>
            <ul>
              <li>Benchmarked mongoDB and PostgreSQL API calls with 10
                million data entries</li>
              <li>Restructured database schema and data structure to bring
                response times from 6s to below 1ms locally</li>
              <li>Scaled to 4 applications hosted on AWS EC2 instances and
                implemented an Nginx load balancer utilizing the round robin load balancing method to handle 1000 requests per second with a less than 1% error rate</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}