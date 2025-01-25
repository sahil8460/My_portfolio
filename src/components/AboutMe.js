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
                    <p>HTML, CSS, JavaScript, TypeScript</p>
                  </div>
                  <div className="col-12 info">
                    <span>Libraries:</span>
                    <p>ReactJs, NextJs, GraphQL, Redux</p>
                  </div>
                  <div className="col-12 info">
                    <span>UI Libraries:</span>
                    <p>Tailwind CSS, HeroUI(NextUI), Material UI, AntDesign, Bootstrap</p>
                  </div>
                  <div className="col-12 info">
                    <span>Testing Libraries:</span>
                    <p>Jest, Cypress, Enzyme</p>
                  </div>
                  <div className="col-12 info">
                    <span>Tools:</span>
                    <p>Jira, Azure, Postman, Git/Github, Gitlab, VS code, WebStorm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="infoContainer">
              <h5>Experience/Work</h5>
              <div className="d-flex flex-wrap">
              <div className="col-12 work-section">
                <div className="info">
                  <span>Position:</span>
                  <p>ReactJS Developer</p>
                </div>
                <div className="info">
                  <span>Work Mode:</span>
                  <p>Remote</p>
                </div>
                <div className="info">
                  <span>Company Name:</span>
                  <p>Ouranos Technologies Pvt Ltd</p>
                </div>
                <div className="info">
                  <span>Duration:</span>
                  <p>August 2023 - Present</p>
                </div>
                <span>As a Front-End Developer, I spearheaded the development of dynamic and responsive web applications using React.js and Next.js, ensuring high performance and a seamless user experience across multiple platforms. I closely collaborated with cross-functional teams to define and implement user interface requirements, which significantly improved application design and user engagement. Additionally, I led the integration of APIs, third-party services, and front-end solutions, contributing to the overall system architecture. I focused on optimizing web applications for SEO, speed, and scalability, which resulted in measurable improvements in performance metrics. My approach included applying modern web development practices such as component-based architecture, state management (Redux/Context API), and server-side rendering (SSR) with Next.js. I continuously prioritized writing clean, maintainable code and ensured the best possible user experience by conducting regular testing and gathering feedback. Additionally, I worked closely with design and product teams to iterate on UI/UX designs, further improving the product’s functionality and visual appeal.</span>
              </div>
              <div className="col-12 work-section">
                <div className="info">
                  <span>Position:</span>
                  <p>ReactJS Developer</p>
                </div>
                <div className="info">
                  <span>Work Mode:</span>
                  <p>On-Site</p>
                </div>
                <div className="info">
                  <span>Company Name:</span>
                  <p>Bvm Infotech</p>
                </div>
                <div className="info">
                  <span>Duration:</span>
                  <p>February 2021 - August 2023</p>
                </div>
                <span>During my time as a Front-End Developer, I gained advanced expertise in React.js, Redux, and GraphQL, focusing on building optimized and scalable applications. I worked extensively with the Next.js framework, implementing Server-Side Rendering (SSR) to optimize performance and enhance user experience. I developed reusable and easy-to-maintain UI components that contributed to the overall scalability of the applications. I also gained experience working with various AWS services, such as CloudFront, AWS Lambda, and S3, to provide scalable cloud storage solutions. Additionally, I implemented unit testing using Jest and Enzyme, ensuring code reliability and performance. I worked with TypeScript and Tailwind CSS to create modern, maintainable front-end solutions. Throughout my time, I participated in daily Scrum meetings, providing updates on feature development, identifying blockers, and offering assistance to other developers when needed. I also focused on improving my communication and leadership skills, contributing to the overall success of the team.</span>
              </div>
              <div className="col-12 work-section">
                <div className="info">
                  <span>Position:</span>
                  <p>Software Engineering Intern</p>
                </div>
                <div className="info">
                  <span>Work Mode:</span>
                  <p>On-Site</p>
                </div>
                <div className="info">
                  <span>Company Name:</span>
                  <p>Opsence Technologies</p>
                </div>
                <div className="info">
                  <span>Duration:</span>
                  <p>September 2020 - January 2021</p>
                </div>
                <span>In my early career as a Front-End Developer, I gained a strong foundational understanding of HTML, CSS, and JavaScript. I worked on live projects, which helped me enhance my problem-solving and logic-building skills. I created demo applications and gained valuable experience in integrating Bootstrap and using CDN for responsive styling. I further honed my skills by working with React.js, learning both class-based and function-based components. During this time, I also gained experience with version control using Git, which helped me manage code more efficiently and collaborate with other developers.</span>
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
