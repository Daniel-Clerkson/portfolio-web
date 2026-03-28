import React from 'react'

const experiences = [
  {
    company: 'ReliAssist',
    role: 'Lead Frontend Developer',
    year: '2024 – Present',
    bullets: [
      'Leading frontend development on the core product as the only frontend engineer on a ~10-person team.',
      'Integrated a headless Hashnode CMS with GraphQL and Next.js App Router for the company\'s public site.',
      'Shipped production-ready UI components using React, Tailwind CSS, and Shadcn/UI.',
    ],
  },
  {
    company: 'STEMLabsNG',
    role: 'Frontend Developer Intern',
    year: '2023 – 2024',
    bullets: [
      'Built and maintained frontend interfaces as part of the engineering team.',
      'Gained hands-on experience with React, component architecture, and real-world shipping cycles.',
    ],
  },
  {
    company: 'Freelance // Independent',
    role: 'Frontend Developer',
    year: '2022 – Present',
    bullets: [
      'Built Sanctuary — a full-stack church platform with Next.js, Supabase, and Google OAuth.',
      'Developed BLW Teens Kano, a React/Supabase app with sermon library, events, and note-taking features.',
      'Designed and shipped multiple client projects focused on performance, clean UI, and fast delivery.',
    ],
  },
]

const Experience = () => {
  return (
    <div className='mt-10 p-10 min-h-[90vh] flex flex-col md:flex-row gap-10 md:gap-20 items-start'>
      <div className="left md:w-2/5 md:sticky md:top-10">
        <h1 className="text-6xl md:text-8xl font-black leading-none">MY</h1>
        <h1 className="text-6xl md:text-8xl font-black leading-none">EXPERI</h1>
        <h1 className="text-6xl md:text-8xl font-black leading-none">ENCE</h1>
      </div>

      <div className="right flex-1 flex flex-col">
        {experiences.map((exp, i) => (
          <div key={i} className="job py-6 border-b border-gray-200 first:pt-0">
            <h2 className="text-2xl md:text-3xl font-black tracking-wide leading-none mb-1">
              {exp.company.toUpperCase()}
            </h2>
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="text-[11px] font-semibold tracking-[2px] uppercase text-[#ff3c2e]">
                {exp.role}
              </span>
              <span className="w-px h-3 bg-gray-300" />
              <span className="text-[11px] tracking-[1.5px] uppercase text-gray-400">
                {exp.year}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              {exp.bullets.map((b, j) => (
                <div key={j} className="flex gap-2 items-start text-sm text-gray-600 leading-relaxed">
                  <span className="text-[#ff3c2e] font-bold shrink-0 mt-0.5">/</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience