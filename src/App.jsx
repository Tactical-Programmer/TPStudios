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

//Only flash card image
//Have flash effect around card on click
//Have mute icon on mini websites
//Adjust scroll to top button size with media size (or make it disappear on smaller screens)
//Button that runs away
//formspree integration in contact form
// - About you section
//     - Projects
//     - Career and Education
//     - Skills (self-evaluate)
//     - Links to Social Media
// - Have yellow police lines that scroll inside Project E to indicate lack of content
//draggable icons and widgets
//Aaron interacting with websites elements
//Text highlight effect
//Hovering background icons
//Guide the user through the projects
//Gradient Borders
//On hover, flip the image to show TP Logo (Also Change the name)
//Project cards on hover increase image size, change picture (flip card???) and onclick zoom in to the image and it's now a new page detailing the project
//Create mini websites for each project