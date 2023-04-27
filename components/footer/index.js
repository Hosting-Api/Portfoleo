import { AppWrap, MotionWrap } from "../wrapper";
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook, BsEnvelopeFill, BsCup, BsGithub, BsFan, BsFileCode, BsReceipt, BsDribbble, BsDiscord, BsCode, BsCodeSlash } from "react-icons/bs";

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Let&lsquo;s work together 🤝</h2>

      <div className="contact__info">
        <p>Mail me at 👇</p>
        <div className="email">
          <BsEnvelopeFill />
          <a
            href="mailto:vinitpatel2019@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            vinitpatel2019@gmail.com
          </a>
        </div>

      </div>

      <div className="app__Social">
        <p>Follow me here 👇</p>

        <div className="app__social__links">
          <a
            href="https://www.linkedin.com/in/vinit-patel-253506254"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://instagram.com/code.vinit"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>

          {/* <a
            href="https://replit.com/@vinitpatel2019"
            target="_blank"
            rel="noreferrer"
          >
            <BsCode />
          </a> */}

          <a
            href="https://github.com/vinit-070"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>

          {/* <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <BsDribbble />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <BsDiscord />
          </a> */}
        </div>
        
     
      </div>
      
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer","foot2"), "contact");
