import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import Footer from "./components/Footer"

function App() {
  return (
      <>
      <div className="min-h-screen w-full relative bg-linear-to-r from-blue-900 via-cyan-700 to-teal-400 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
        <p className="text-6xl">Software Developer</p>
      </div>

      <div className="min-h-screen w-full relative bg-linear-to-r from-blue-900 via-cyan-700 to-teal-400 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
        <h1 className="text-6xl font-bold">About</h1>
        <p className="text-2xl">Browzen </p>
        <p className="text-2xl">Starvest </p>
        <p className="text-2xl">DHA</p>
      </div>


      <div className="min-h-screen w-full relative bg-linear-to-r from-blue-900 via-cyan-700 to-teal-400 flex items-center justify-center text-center flex-col gap-10 text-white p-52">
        <div className="flex flex-row gap-6">
          <a href="mailto:anna.kuskova@email.com" className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black text-2xl hover:scale-110 hover:bg-purple-100 transition">
            <FaEnvelope />
          </a>

          <a href="https://linkedin.com/in/akuskova" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black text-2xl hover:scale-110 hover:bg-purple-100 transition">
            <FaLinkedin />
          </a>

          <a href="https://github.com/akuskova" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black text-2xl hover:scale-110 hover:bg-purple-100 transition">
            <FaGithub />
          </a>
        </div>
      </div>
      <Footer />
      </>
    )

}

export default App
