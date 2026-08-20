import Hero from "../components/Hero";

export default function AboutMe() {
    return (
        <Hero>
            <h1 className="text-3xl md:text-6xl font-bold">About Me</h1>
            <p className="text-base md:text-2xl max-w-2xl">I am a passionate software developer with experience in building web applications using modern technologies. I enjoy solving complex problems and continuously learning new skills.</p>
            <p className="text-base md:text-2xl max-w-2xl">In my free time, I like to contribute to open-source projects and explore new programming languages and frameworks.</p>
        </Hero>
    )
}