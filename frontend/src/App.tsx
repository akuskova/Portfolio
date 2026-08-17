
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

function App() {
  let component
  switch(window.location.pathname) {
    case "/about":
      component = <AboutMe />
      break
    case "/projects":
      component = <Projects />
      break
    case "/contact":
      component = <Contact />
      break
    default:
      component = <AboutMe />
  }
  return (
      <>
      <Navbar />
      {component}
      <Footer />
      </>
    )

}

export default App
