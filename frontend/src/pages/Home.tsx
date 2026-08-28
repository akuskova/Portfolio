import { Link } from 'react-router-dom';
import { useLockScroll } from '../hooks/useLockScroll';
import NightSky from '../components/NightSky';

export default function Home() {
    useLockScroll()
  return (
    <NightSky className="min-h-screen">
        
        {/* Content — on top of both background layers */}
        <div className="relative z-10 flex flex-col justify-center md:justify-end pl-4 pb-4 md:pl-13 md:pb-50 lg:pb-20 lg:pl-15 gap-4 min-h-[calc(100vh-5rem-4rem)]">
            <h1 className=" text-4xl md:text-6xl font-bold text-moonlight animate-[fadeInUp_0.6s_ease-out]">
            Hi, I'm Anna Kuskova.
            </h1>
            <p className=" text-lg md:text-xl max-w-2xl text-cloud animate-[fadeInUp_0.6s_ease-out_0.15s_backwards] mt-8">
            A software developer and computer science student at UC Irvine, minoring in statistics.
            I care most about work that reaches the people software often forgets — accessibility,
            community organizations, and small-scale systems that quietly make hard things easier.
            </p>
            <p className=" italic text-xl md:text-2xl text-sunset font-semibold">
                I enjoy making things — and love learning how to make them.
            </p>
            <div className="flex gap-4 mt-6 animate-[fadeInUp_0.6s_ease-out_0.35s_backwards]">
            <Link to="/projects" className=" bg-sunset text-evening font-bold px-6 py-3 rounded-full hover:bg-sunset-glow transition">
                See projects
            </Link>
            <Link to="/about" className=" border border-moonlight text-moonlight font-bold px-6 py-3 rounded-full hover:border-sunset hover:text-sunset transition">
                About me
            </Link>
            </div>
        </div>

    </NightSky>
  );
}