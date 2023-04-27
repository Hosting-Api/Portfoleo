import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';


const FavTools = [ '/public/node.png', '/react.png', '/cpp.png', '/python.png', '/java.png'];

const Hero = () => {

  return (
    <div className="app__hero app__flex">

      <div className="p-text">Hi<span>👋</span>, I am</div>
      <div className="head-text">Vinit Patel</div>
      <div className="sub-text">Student  |  Developer</div>

      <div className="detail-text">
        <p>I am a <span>Software Engineer</span> specialized in both <span>front-end</span> and <span>back-end</span> development across platforms.</p>
        <br />
        <p>Currently, I am exploring Flutter and Node.js to build full-stack applications.</p>
      </div>

      <a className="filled-btn"
        href = "mailto:abc@example.com?subject=Feedback&body=Message">
              Hire Me
      </a>
       

      <div className="fav__techs">
        {
          FavTools.map((tool, index) => {
            return (
              <div className="fav__tech" key={index}>
                <Image src={tool} alt="tool" />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default AppWrap(MotionWrap(Hero, "home"), "home");
