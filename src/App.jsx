import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-center bg-cover bg-img"></div>
      <div className="container relative z-10 flex flex-col items-center p-4 mx-auto space-y-8">
        <Hero />
        <NavBar />
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
