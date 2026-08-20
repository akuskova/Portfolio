import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import Hero from "../components/Hero"

export default function Contact() {
    return (
        <Hero>
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
        </Hero>
    )
}