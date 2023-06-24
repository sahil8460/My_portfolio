import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Sahil Akbari",
    location: "Surat, Gujarat, India",
    tagline: "I'm a Developer",
    email: "sahilakbari8460@gmail.com",
    availability: "Open to work",
    brand:
      "Hello! I'm Sahil. As a Software Engineer, I specialize in designing and developing user interfaces for web applications using the React library. With several years of experience in this role, I have honed my skills in writing clean, reusable, and maintainable code, collaborating with designers and cross-functional teams, troubleshooting and debugging issues, and optimizing application performance.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
