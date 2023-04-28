import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';
import profile from '../../../profile-pic.jpg';


const About = () => {
  return (
    <>
      <div className="flex__row">

        <div className="profile__img">
          <Image src="{profile}"
            alt="profile"
            width={1080}
            height={1080}
            layout="intrinsic"
            priority
          />
        </div>

        <div className="spacer" />

        <div className="details">
          <h1 className="head-text">I am Vinit Patel.</h1>
          <p className="p-text"><span>•</span> I am a Computer Engineering Student in UTU.</p>
          <p className="p-text"><span>•</span> I have worked on various projects as a web Developer as well as a programmer.</p>
          <p className="p-text"><span>•</span> My field of Interest &apos; s are building new  Web Technologies and Products and also in areas related to Web and System Security.</p>
          <p className="p-text"><span>•</span> Whenever possible, I also apply my passion for developing Web products with   Html, CSS, Js, PHP and Js frame works likeReact and Next.js</p>


          <p className='p-text-head'>My Preferred Tools and Technologies are 👇</p>

          <div className="preferred__skills">
            {
              ["C, Java, C++, Python", " React.js,  Next.js", "Php, HTML, CSS, Java Script", "SQLite3, MySQL"].map((item, index) => {
                return (
                  <div key={index} className="profile__skill">
                    <span><BsFillCheckCircleFill /></span>
                    <p className="p-text">{item}</p>
                  </div>
                )
              })
            }
          </div>

          <a className="outlined-btn"
            href='https://github.com/vinit-070' target="_blank" rel="noreferrer"
          >
            My GitHub
          </a>

        </div>

      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about");
