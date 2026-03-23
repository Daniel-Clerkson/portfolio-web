import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="main flex flex-col md:flex-row justify-between items-start md:items-center min-h-[80vh] p-5 mb-20">
      <div className="left flex flex-col justify-between h-full w-full md:w-auto">
        <div className="head mt-16 md:mt-20">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black red leading-none">DANIEL</h1>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black leading-none">CLERKSON</h1>
        </div>
        <div className="sub inter mt-20 md:mt-10 text-base md:text-lg">
          <p>
            17 | Frontend developer | Building things that make people ask,{" "}
            <span className="italic red font-bold">"who made this?"</span>
          </p>
        </div>
      </div>

      <div className="right flex items-end mt-8 md:mt-0 md:h-full self-start md:self-end">
        <Link href="#contact">
          <button className="group relative cursor-pointer flex items-center shadow-[6px_6px_0px_0px_rgba(255,60,46,1)] hover:shadow-none gap-3 bg-black hover:bg-[#ff3c2e] text-white px-8 py-4 font-black text-sm tracking-widest transition-all">
            LET'S WORK
            <BiRightArrowAlt className="text-2xl transition-transform group-hover:translate-x-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;