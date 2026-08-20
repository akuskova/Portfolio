
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
import API from "./pages/API"
import { Route, Routes } from "react-router-dom"
import PageLayout from "./components/PageLayout"

function App() {
  return (
      <>
      <Navbar />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/api" element={<API />} />
          <Route path="/projects/browzen" element={<Browzen />} />
          <Route path="/projects/starvest" element={<Starvest />} />
          <Route path="/projects/dha" element={<DHA />} />
          <Route path="/projects/search-engine" element={<SearchEngine />} />
        </Route>
      </Routes>
      <Footer />
      </>
    )

}

export default App
