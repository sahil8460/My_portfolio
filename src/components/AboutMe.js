import aboutMeImg from "../images/aboutme-sahil.jpeg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/Sahil_Resume_.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
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
                    <span>Frontend:</span>
                    <p>ReactJS, NextJS (App Router), JavaScript, TypeScript, GraphQL</p>
                  </div>
                  <div className="col-12 info">
                    <span>State &amp; Data:</span>
                    <p>Redux Toolkit, React Query, Zustand, Axios</p>
                  </div>
                  <div className="col-12 info">
                    <span>Styling:</span>
                    <p>Tailwind CSS, Bootstrap, Material UI, Ant Design, shadcn/ui, SCSS</p>
                  </div>
                  <div className="col-12 info">
                    <span>Testing:</span>
                    <p>Jest, Cypress, Component / API-function / E2E Testing</p>
                  </div>
                  <div className="col-12 info">
                    <span>Backend (Supporting):</span>
                    <p>Node.js, Express.js, REST API design</p>
                  </div>
                  <div className="col-12 info">
                    <span>Integrations:</span>
                    <p>Twilio, Mailchimp, ManyChat, Zoom, Mixpanel, Google Maps API, Razorpay, Stripe, PayPal</p>
                  </div>
                  <div className="col-12 info">
                    <span>DevOps &amp; AI:</span>
                    <p>GitHub, CI/CD, Vercel, Railway, Heroku, Git Worktrees, Claude Code</p>
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
                  <p>Frontend Engineer</p>
                </div>
                <div className="info">
                  <span>Work Mode:</span>
                  <p>Remote</p>
                </div>
                <div className="info">
                  <span>Company Name:</span>
                  <p>MM NOVA TECH LTD (Canada)</p>
                </div>
                <div className="info">
                  <span>Duration:</span>
                  <p>March 2024 - Present</p>
                </div>
                <span>I work across two production platforms. On NovaCRM, an AI voice-calling and marketing-automation product, I contributed to the V1 to V2 modernization spanning ~80–90 pages and 17 modules with a 3-person frontend team: migrating JavaScript to TypeScript with centralized, type-safe API definitions, moving CSS/Bootstrap toward Tailwind CSS, shadcn/ui, and SCSS, introducing React Query caching with query keys, stale-time strategies, and direct cache updates, and implementing JWT authentication, protected routes, and automatic logout on 401. I built real-time WebSocket progress for batch file uploads and tag updates, complex multi-step forms with React Hook Form, and ~40% automated coverage with Jest and Cypress, plus AI-assisted workflows using Claude Code, CLAUDE.md, custom commands, and Git worktrees. I also architected the frontend from scratch for a multi-theme Real Estate IDX platform serving ~50 client websites across 11 themes and ~40 pages: JWT auth with Zustand and Axios interceptors, URL-driven property search and filters that persist across refreshes, map-based MLS search with Google Maps, saved searches and email alerts, React Query caching, reusable white-label component patterns, and SSR with dynamic API-driven metadata and code splitting for SEO.</span>
              </div>
              <div className="col-12 work-section">
                <div className="info">
                  <span>Position:</span>
                  <p>Frontend Engineer</p>
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
                  <p>August 2023 - March 2024</p>
                </div>
                <span>I developed production CRM features and reusable UI components using React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Zustand. I integrated REST APIs with robust loading and error handling and reusable frontend data patterns, implemented responsive and accessible interfaces, and collaborated closely with design, backend, and QA teams. I also wrote Jest and Cypress tests covering components, API functions, and end-to-end flows.</span>
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
                  <p>BVM Infotech</p>
                </div>
                <div className="info">
                  <span>Duration:</span>
                  <p>February 2022 - August 2023</p>
                </div>
                <span>I translated UI/UX designs into responsive production interfaces using ReactJS and NextJS, integrated REST APIs, managed frontend state, and built reusable components with a focus on responsiveness and consistency. I worked with Heroku deployment environments and production logs to investigate and debug application issues, and maintained code quality through Git workflows while contributing to technical implementation discussions.</span>
              </div>
              </div>

            </div>
            <div className="infoContainer">
              <h5>Education</h5>
              <div className="d-flex flex-wrap">
                <div className="col-12 work-section">
                  <div className="info">
                    <span>Degree:</span>
                    <p>Bachelor of Engineering in Computer Engineering</p>
                  </div>
                  <div className="info">
                    <span>University:</span>
                    <p>Gujarat Technological University</p>
                  </div>
                  <div className="info">
                    <span>Year:</span>
                    <p>2023</p>
                  </div>
                  <div className="info">
                    <span>CGPA:</span>
                    <p>8.76</p>
                  </div>
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
