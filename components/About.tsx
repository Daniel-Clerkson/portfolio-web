import React from 'react'

const About = () => {
  return (
    <div className='mt-10 p-10 min-h-[90vh] bg-gray-50 flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
      
      <div className="left md:w-1/2">
        <h1 className="text-6xl md:text-7xl font-black leading-none">NOT YOUR</h1>
        <h1 className="text-6xl md:text-7xl font-black leading-none">AVERAGE</h1>
        <h1 className="text-6xl md:text-7xl font-black leading-none">DEV.</h1>
      </div>

      <div className="right md:w-1/2 flex flex-col justify-between h-full gap-10">
        <div className="sub flex flex-col gap-4">
          <p className="text-base text-gray-600 leading-relaxed">
            I'm a frontend developer based in Kano, Nigeria — currently interning as lead frontend dev at ReliAssist while studying Software Engineering at BUK.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            I build things that work, look good, and ship on time. That's it.
          </p>
        </div>

        <div className="data flex gap-10 border-t border-gray-200 pt-8">
          <div className="years flex flex-col gap-1 border-l-[#ff3c2e] border-l-3 pl-2">
            <span className="text-4xl font-black">3+</span>
            <span className="text-xs tracking-widest text-amber-800 uppercase">Years building</span>
          </div>
          <div className="projects flex flex-col gap-1 border-l-3 pl-2">
            <span className="text-4xl font-black">6+</span>
            <span className="text-xs tracking-widest text-amber-800 uppercase">Shipped projects</span>
          </div>
          <div className="mission flex flex-col gap-1 border-l-[#ff3c2e] border-l-3 pl-2">
            <span className="text-4xl font-black">1</span>
            <span className="text-xs tracking-widest text-amber-800 uppercase">Mission</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About