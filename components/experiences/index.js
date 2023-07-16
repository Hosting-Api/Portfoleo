import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";

const ExperienceList = [
  
    //  {
    //    title: "Fresher",
    //    company: "Student",
    //    duration: "Presently",
    //    desc: "Currently, I don't have professional experience but I have Skills and worked on ",
    //    tags: ["Java", "C", "C++", "Python", "React.js", "Next.js", "JavaScript", "Php", "Bash", "Html", "CSS",  "Bootstrap", "WordPress" ],
    //  },

      {
       title: "Device Tester for NOTHING ",
       company: "NOTHING",
       duration: "Currently",
       desc: "Tested and Reported many Bugs in NOTHING Phone (2)",
       tags: ["Tested Device Performence", "Comparing With Other Devices" ],
     },

     {
       title: "Freelance Web Developer for Jalaram Graphics",
       company: "Jalaram Graphics",
       duration: "1 week",
       desc: "Developed Website For Jalaram Graphics, (A local business) using",
       tags: ["Html", "CSS", "JavaScript", "Php", "Bootstrap" ],
     },
     {
      title: "Worked as a freelance Ethical Hacker",
      company: "Web Bazaar",
      duration: "1 week",
      desc: "Secured St Martha's College Of Nursing Website, (A product of Web Bazaar) using my skills",
      tags: [ "Cyber Security"],
    }
];

const Experiences = () => {

  return (
    <>
      <h2>Experiences</h2>

      <div className="app__experiences">
        {
          ExperienceList.map((item, index) => (
            <div key={index} className="app__experiences__item">

              <h3 className="app__experiences__item__title">
                {item.title}
              </h3>

              <div className="app__experiences__item__company">
                {item.company}
              </div>

              <div className="app__experiences__item__duration">
                {item.duration}
              </div>

              <div className="app__experiences__item__description">
                {item.desc}
              </div>

              <div className="app__experiences__item__tags">
                {
                  item.tags.map((tag, index) => {
                    return (
                      <div key={index} className="app__experiences__item__tag">
                        <span><BsFillCheckCircleFill /></span>
                        <p className="p-text">{tag}</p>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          ))
        }
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Experiences, "app__skills"), "experiences");
