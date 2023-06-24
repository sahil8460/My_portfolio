import aboutMeImg from "../images/aboutme.jpeg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/Sahil_Resume_.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
  const skills = []
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Sahil-Akbari-Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={aboutMeImg} alt={name} />
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>Nice to meet you</h4>
            <h5>Everyone can deliver RESULTS but a few can deliver SATISFACTION.</h5>
            <div className="contentDescription">
              <p>{brand}</p>
            </div>
            <div className="infoContainer">
              <h5>Skills/Tools</h5>
              <div className="contentDescription">
                <div className="row">
                  <div className="col-12 info">
                    <span>Languages:</span>
                    <p>HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Material UI, AntDesign</p>
                  </div>
                  <div className="col-12 info">
                    <span>Frameworks:</span>
                    <p>ReactJs, NextJs, NodeJs, Express</p>
                  </div>
                  <div className="col-12 info">
                    <span>Tools:</span>
                    <p>Jira, Azure, Postman, Git/Github, VS code, WebStorm</p>
                  </div>
                  <div className="col-12 info">
                    <span>Databases:</span>
                    <p>SQL (MySQL), NoSQL, MongoDB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="infoContainer">
              <h5>Experience/Work</h5>
              <div className="d-flex flex-wrap">
              <div className="col-12 col-xxl-6 work-section">
                <div className="info">
                  <span>Position:</span>
                  <p>Software Engineer</p>
                </div>
                <div className="info">
                  <span>Company Name:</span>
                  <p>Bvm Infotech</p>
                </div>
                <div className="info">
                  <span>Duration:</span>
                  <p>Feb 2021 - Present</p>
                </div>
                <span>Work on a tight schedule to meet deadline and to achieve goals. helped to manage Projects and leading a team. Collaborated with people from different countries and cultures.</span>
              </div>
              <div className="col-12 col-xxl-6 work-section">
                <div className="info">
                  <span>Position:</span>
                  <p>Software Engineering Intern</p>
                </div>
                <div className="info">
                  <span>Company Name:</span>
                  <p>Opsence Technologies</p>
                </div>
                <div className="info">
                  <span>Duration:</span>
                  <p>September 2020 - January 2021</p>
                </div>
                <span>The project involved upgrading the website with the team. The client's specifications were followed when managing and delivering site/software</span>
              </div>
              </div>
              
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Name:</span>
                  <p>Sahil Akbari</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Location:</span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Availability:</span>
                  <p>{availability}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Downloading..." : "Download Resume"}
              </button>{" "}
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
