import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Sahil Akbari",
    location: "Surat, Gujarat, India",
    tagline: "I'm a Frontend Engineer",
    email: "sahilakbari8460@gmail.com",
    availability: "Open to work",
    brand:
      "Hello! I’m Sahil — a pleasure to meet you. I'm a Frontend Engineer with 4+ years building scalable, production-grade web applications with React, Next.js, and TypeScript. My work spans frontend architecture and application modernization: JavaScript-to-TypeScript migrations, JWT authentication and protected routes, React Query data caching, real-time WebSocket interfaces, automated testing with Jest and Cypress, performance optimization, and SEO. I write clean, reusable, maintainable code, collaborate closely with designers and cross-functional teams, and lean on AI-assisted workflows to ship faster. What drives me isn't just delivering results — it's delivering satisfaction: troubleshooting, debugging, and tuning performance until the user experience feels effortless.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
