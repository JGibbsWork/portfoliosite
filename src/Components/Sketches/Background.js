import {ReactP5Wrapper} from 'react-p5-wrapper';
import sketch from './sketch';


export default function Background () {
    return (
      <div>
        <ReactP5Wrapper sketch={sketch} ></ReactP5Wrapper>
      </div>
    )
}
