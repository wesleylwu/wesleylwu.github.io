import Landing from "@/components/Landing";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <div className="bg-transparent text-white">
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
