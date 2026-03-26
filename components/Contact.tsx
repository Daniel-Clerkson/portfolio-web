import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="relative bg-white min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
      
      {/* BACKGROUND TEXT - Added subtle floating animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[25vw] font-black text-gray-100/60 leading-none uppercase whitespace-nowrap animate-pulse duration-[4000ms]">
          DANIEL
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        
        {/* Responsive Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none">
          LET'S <span className="text-[#ff3c2e] italic">BUILD</span>.
        </h1>

        {/* Interactive Email Link */}
        <div className="mt-8 md:mt-12 group">
          <Link 
            href="mailto:danielclerkson68@gmail.com" 
            className="text-lg sm:text-2xl md:text-4xl font-bold transition-all duration-300 group-hover:tracking-widest flex flex-col items-center"
          >
            <span className="text-gray-900 group-hover:text-[#ff3c2e]">
              danielclerkson68@gmail.com
            </span>
            {/* Animated underline */}
            <div className="h-[2px] w-0 group-hover:w-full bg-[#ff3c2e] transition-all duration-500 mt-1" />
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex items-center gap-8 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
          <Link 
            href="www.linkedin.com/in/
daniel-clerkson-80335a33b" 
            target="_blank"
            className="text-gray-500 hover:text-black transition-colors relative group"
          >
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
          </Link>
          
          <Link 
            href="www.github.com/Daniel-Clerkson" 
            target="_blank"
            className="text-gray-500 hover:text-black transition-colors relative group"
          >
            GitHub
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;