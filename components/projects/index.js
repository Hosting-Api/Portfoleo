import { BsFillCheckCircleFill, BsGithub } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const projects = [
  // {
  //   title: "A Social Media App",
  //   desc: "A social media app using Flutter, Dart, GetX, and REST API that allows users to share their photos and videos.",
  //   coverUrl: "/mobile-dev.png",
  //   githubLink: "https://github.com/nixrajput/social-media-app-flutter",
  //   demoLink: "https://github.com/nixrajput/social-media-app-flutter/releases",
  //   tags: ["Flutter", "Dart", "GetX", "REST API"],
  // },
  
  {
    title: "Education Website",
    desc: "A website for students to get information about the courses offered by any Organization.",
    //coverUrl: "/quicklearn.png",
    coverUrl: "/quicklearn.png",
    // githubLink: "https://github.com/Vinit-070/",
    demoLink: "/quicklearn.png",
    tags: ["Html", "Css", "Js", "Bootstrap"],
  },
  {
    title: "C++ Programs",
    desc: "C++ Programs  for Beginners With OOP.",
    coverUrl: "/cpp.png",
    demoLink: "https://replit.com/@vinitpatel2019",
    tags: ["C++", "OOPs"],
  },
  {
    title: "Java Programs",
    desc: "Java Programs  for Beginners.",
    coverUrl: "/java.png",
    // githubLink: "https://github.com/Vinit-070/",
    demoLink: "https://replit.com/@vinitpatel2019",
    tags: ["Java", "OOPs"],
  },
  {
    title: "Python Program",
    desc: "Python Programs  for Beginners",
    coverUrl: "/python.png",
    githubLink: "https://github.com/Vinit-070/Python_Programs_2023",
    demoLink: "https://replit.com/@vinitpatel2019",
    tags: ["Python"],
  }
];

const Projects = () => {

  return (
    <>
      <h2> My Projects </h2>

      <div className="project__works">
        {
          projects.map((project, index) => {
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
                    Demo
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

export default AppWrap(MotionWrap(Projects, "app__projects"), "projects");
