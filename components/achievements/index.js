import { BsFillCheckCircleFill, BsGithub } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const achievements = [

  {
    title: "Letter Of Appreciaation ",
    // desc: "Python Programs  for Beginners",
    coverUrl: "/img23422.png",
    demoLink: "/img23422.png",
    tags: ["June 2023"],
  },
   
  {
    title: "Appreciation Certificate",
    // desc: "A website for students to get information about the courses offered by any Organization.",
    //coverUrl: "/quicklearn.png",
    coverUrl: "/img23652.png",
    demoLink: "/img23652.png",
    tags: ["June 2023"],
  },
  
  {
    title: "Microsoft Certification",
    // desc: "Java Programs  for Beginners.",
    coverUrl: "/img23912.png",
    demoLink: "/img23912.png",
    tags: ["May 2022"],
  }
];

const Projects = () => {

  return (
    <>
      <h2> My Achievements </h2>

      <div className="project__works">
        {
          achievements.map((project, index) => {
            return (
              <div key={index} className="project__work">
                <div className="project__work__img">
                  <Image src={project.coverUrl}
                    alt={project.title}
                    layout="fill"
                    priority
                  />
                  
                </div>
                <div className="project__work__details">
                  <h3 className="project__work__title">{project.title}</h3>
                  <p className="project__work__desc">{project.desc}</p>

                  {/* <a className="text-btn" href={project.githubLink} target="_blank" rel="noreferrer">
                    <BsGithub />
                    <span>GitHub repo</span>
                  </a> */}

                  <div className="project__work__tags">
                    {
                      project.tags.map((tag, index) => {
                        return (
                          <div key={index} className="project__work__tag">
                            <span><BsFillCheckCircleFill /></span>
                            <p className="p-text">{tag}</p>
                          </div>
                        )
                      })
                    }
                  </div>

                  <a className="outlined-btn" href={project.demoLink} target="_blank" rel="noreferrer">
                    View
                  </a>

                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Projects, "app__projects"), "achievements");
