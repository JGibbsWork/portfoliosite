import { FaArrowAltCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom';

export default function App() {
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
          <p>ldkfjha;sdl ; skldfj ;sd ;faslk df;lkas djf ;lsakdj f sf; sa;ldj f;lksj dfl;k;l skdjf;l as;l s dlfk;alsh f sad fhalskjhflk sdjklf ;sdf;lk as;lkf ; sdhlf ;lasdkj f;lks d;flk ;as f;ls f;lh sd;fh ;jdsh f;kdjshsjkdhf sad;hfk sa f;lhsadlkfheoi hr8oh fiourho r goi roics dhvh ds ffhs </p>
          <a href="https://drive.google.com/file/d/122vC6CgYJJ8k8qCXzwx6vj3r-I0d2Ilm/view?usp=sharing" target="_blank" rel="noreferrer">
            <span>RESUME</span>
          </a>
        </div>
      </div>
    </>
  )
}