
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Browzen from "./pages/Browzen"
import Starvest from "./pages/Starvest"
import DHA from "./pages/DHA"
import Home from "./pages/Home"
import SearchEngine from "./pages/SearchEngine"

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
    case "/projects/browzen":
      component = <Browzen />
      break
    case "/projects/starvest":
      component = <Starvest />
      break
    case "/projects/dha":
      component = <DHA />
      break
    case "/projects/search-engine":
      component = <SearchEngine />
      break
    default:
      component = <Home />
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
