import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Sahil Akbari",
    location: "Surat, Gujarat, India",
    tagline: "I'm a Frontend Developer",
    email: "sahilakbari8460@gmail.com",
    availability: "Open to work",
    brand:
      "Hello! I’m Sahil, and it's a pleasure to meet you. As a passionate Software Engineer, I specialize in crafting and developing user interfaces for web applications using React. With years of experience, I've honed my ability to write clean, reusable, and maintainable code while working closely with designers and cross-functional teams. I am driven by delivering not just results, but also satisfaction by troubleshooting, debugging, and optimizing application performance to provide the best user experience possible.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
