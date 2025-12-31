"use client"
import { useState } from "react";
import { User, GraduationCap, Briefcase, Code } from "lucide-react";
import Me from "@/public/daniel.jpeg"
import Image from "next/image";

export default function MinimalistAbout() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            {/* Profile Image */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-green-500 to-indigo-600 p-0.5 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <Image 
                  src={Me} 
                  alt="Daniel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                Daniel Clerkson
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                Front-End Developer & Software Engineering Student
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>Kano, Nigeria</span>
                <span>•</span>
                <span className="text-green-600 dark:text-green-400">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-1 mb-6 md:mb-8 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 font-medium transition-all relative whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="py-6 md:py-8">
          {/* About Tab */}
          {activeTab === "about" && (
            <div className="space-y-4 md:space-y-6 animate-fadeIn">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a front-end developer focused on building clean, functional web experiences. 
                  I work primarily with <span className="text-blue-600 dark:text-blue-400 font-medium">React and Next.js</span>, and I'm drawn to projects where design 
                  and engineering come together to solve real problems.
                </p>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Currently studying Software Engineering at Bayero University while working on 
                  production applications. I'm interested in performance optimization, accessible 
                  interfaces, and the small details that make products feel polished.
                </p>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, I'm usually exploring new tools, reading technical documentation, 
                  or thinking about ways to improve user workflows.
                </p>
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="space-y-6 md:space-y-8 animate-fadeIn">
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    Bachelor of Science in Software Engineering
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    2025 — Present
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Bayero University Kano
                </p>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="space-y-8 md:space-y-12 animate-fadeIn">
              {/* Current Position */}
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0 mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    Front-End Developer
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    2025 — Present
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                  ReliAssist
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 md:mb-4">
                  Building modern web applications with React, Next.js, and TypeScript. 
                  Focus on component architecture and user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs md:text-sm text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-2 md:px-3 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Previous Position */}
              <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0 mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                    Front-End Developer
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    2023 — 2025
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                  StemLabs
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 md:mb-4">
                  Developed full-stack applications and admin interfaces. Worked on real estate 
                  management systems, e-commerce platforms, and booking applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs md:text-sm text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 px-2 md:px-3 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Projects */}
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Selected Projects
                  </p>
                  <ul className="space-y-1 text-sm md:text-base text-gray-700 dark:text-gray-300">
                    <li>Real estate management dashboard</li>
                    <li>Agro e-commerce platform</li>
                    <li>YC Combinator directory</li>
                    <li>OfficeBox: Co-working space booking system</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="space-y-8 md:space-y-10 animate-fadeIn">
              {/* Frontend */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs md:text-sm text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 px-3 md:px-4 py-1.5 md:py-2 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Styling */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Styling & UI
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["CSS3", "Framer Motion", "shadcn/ui", "Responsive Design"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs md:text-sm text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 px-3 md:px-4 py-1.5 md:py-2 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Tools & Workflow
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "VS Code", "npm/yarn", "Vercel"].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs md:text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 md:px-4 py-1.5 md:py-2 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Currently Exploring
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                    <span>Advanced React patterns and performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                    <span>Backend development with Node.js</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">→</span>
                    <span>Cloud deployment and DevOps fundamentals</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}