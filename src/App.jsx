import "./App.css";
import Hero from "./Sections/Hero/Hero";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

//Fix copyright gap (because of ScrollToTop section)
//Toggle for theme
//Button that runs away
//Projects section first
//pfp on the left
//Background that covers entire section (and maybe one that covers the whole page)
//Snap scrolling (started in App.css)
//formspree integration in contact form
// - About you section
//     - Projects
//     - Career and Education
//     - Skills (self-evaluate)
//     - Links to Social Media
// - Have yellow police lines that scroll inside Project E to indicate lack of content
//draggable icons and widgets
//Aaron interacting with websites elements