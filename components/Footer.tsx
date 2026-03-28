import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t-4 border-black px-6 py-10 md:p-10 bg-white'>
        {/* Main Name Heading */}
        <div className="mb-12 md:mb-20">
            <h1 className='text-[12vw] md:text-[9rem] font-black leading-[0.85] tracking-tighter uppercase'>
                Daniel <br className="md:hidden" /> Clerkson
            </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-8 md:gap-0">
            
            {/* Copyright with that red accent */}
            <div className="text-[10px] md:text-xs font-bold tracking-widest text-[#ff3c2e] uppercase">
                <span className="mr-1">©</span> 
                2026 Daniel Clerkson. All Rights Reserved
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-black tracking-widest uppercase">
                <Link href="mailto:danielclerkson68@gmail.com" className='hover:text-[#ff3c2e] transition-colors'>EMAIL</Link>
                <Link href="https://www.linkedin.com/in/daniel-clerkson-80335a33b/" target="_blank" className='hover:text-[#ff3c2e] transition-colors'>LINKEDIN</Link>
                <Link href="https://www.github.com/Daniel-Clerkson" target="_blank" className='hover:text-[#ff3c2e] transition-colors'>GITHUB</Link>
                <a href="/My-Resume.pdf" download={"daniel-clerkson-cv.pdf"} className='hover:text-[#ff3c2e] transition-colors'>READ.CV</a>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer