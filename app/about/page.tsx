"use client";
import { useState, useRef, useEffect } from "react";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/terminal";
import Image from "next/image";
import Logo from "@/public/daniel.jpeg";

export default function TerminalAbout() {
  const [section, setSection] = useState("home");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  // Refocus input after section changes
  useEffect(() => {
    inputRef.current?.focus();
  }, [section]);

  // Auto-scroll to bottom when content changes
  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop =
        terminalContentRef.current.scrollHeight;
    }
  }, [section]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    setCommandHistory([...commandHistory, cmd]);

    if (cleanCmd === "cd education") setSection("education");
    else if (cleanCmd === "cd experience") setSection("experience");
    else if (cleanCmd === "cd about") setSection("about");
    else if (cleanCmd === "cd skills") setSection("skills");
    else if (cleanCmd === "cd " || cleanCmd === "cd ~" || cleanCmd === "home")
      setSection("home");
    else if (cleanCmd === "clear") setCommandHistory([]);
  };

  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center mt-10 px-4">
      <div className="w-full md:w-[90%] lg:w-[85%] max-w-5xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300 px-3 md:px-4 py-2 md:py-3 rounded-t-xl border-b border-gray-700 dark:border-gray-400">
          <div className="flex gap-1.5 md:gap-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
          </div>
          <div className="flex-1 text-center overflow-hidden">
            <span className="text-[10px] md:text-xs font-mono text-gray-400 dark:text-gray-600 truncate block">
              daniel@portfolio:~/{section === "home" ? "" : section}
            </span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="rounded-b-xl p-3 md:p-6 shadow-2xl border-x border-b border-gray-800 dark:border-gray-300 bg-gray-950 dark:bg-gray-50">
          <div
            ref={terminalContentRef}
            className="overflow-y-auto overflow-x-hidden max-h-[400px] md:max-h-[500px]"
          >
            <Terminal
              className="border-none bg-transparent h-auto text-white dark:text-black"
              sequence={false}
            >
              <div key={section} className="min-h-[250px] md:min-h-[300px]">
                {/* Home Screen */}
                {section === "home" && (
                  <div className="space-y-3 md:space-y-4">
                    <TypingAnimation
                      className="text-green-400 dark:text-green-600 font-bold text-base md:text-lg break-words"
                      delay={0}
                    >
                      $ ./welcome.sh
                    </TypingAnimation>

                    <AnimatedSpan
                      delay={500}
                      className="block text-gray-300 dark:text-gray-700 text-xs md:text-sm overflow-hidden"
                    >
                      ════════════════════════════════════════════
                    </AnimatedSpan>

                    <AnimatedSpan
                      delay={800}
                      className="block text-lg md:text-xl font-bold text-white dark:text-black break-words"
                    >
                      👋 Welcome to Daniel's Portfolio
                    </AnimatedSpan>

                    <AnimatedSpan
                      delay={1200}
                      className="block text-gray-400 dark:text-gray-600 mt-3 md:mt-4 text-sm md:text-base"
                    >
                      Available commands:
                    </AnimatedSpan>

                    <AnimatedSpan delay={1500} className="block ml-2 md:ml-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                        <span className="text-cyan-400 dark:text-cyan-600 font-mono text-xs md:text-sm">
                          cd about
                        </span>
                        <span className="text-gray-500 sm:ml-4 text-xs md:text-sm">
                          → Learn about me
                        </span>
                      </div>
                    </AnimatedSpan>

                    <AnimatedSpan delay={1650} className="block ml-2 md:ml-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                        <span className="text-cyan-400 dark:text-cyan-600 font-mono text-xs md:text-sm">
                          cd education
                        </span>
                        <span className="text-gray-500 sm:ml-4 text-xs md:text-sm">
                          → View educational background
                        </span>
                      </div>
                    </AnimatedSpan>

                    <AnimatedSpan delay={1800} className="block ml-2 md:ml-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                        <span className="text-cyan-400 dark:text-cyan-600 font-mono text-xs md:text-sm">
                          cd experience
                        </span>
                        <span className="text-gray-500 sm:ml-4 text-xs md:text-sm">
                          → View work experience
                        </span>
                      </div>
                    </AnimatedSpan>

                    <AnimatedSpan delay={1950} className="block ml-2 md:ml-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                        <span className="text-cyan-400 dark:text-cyan-600 font-mono text-xs md:text-sm">
                          cd skills
                        </span>
                        <span className="text-gray-500 sm:ml-4 text-xs md:text-sm">
                          → View technical skills
                        </span>
                      </div>
                    </AnimatedSpan>

                    <AnimatedSpan delay={2100} className="block ml-2 md:ml-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                        <span className="text-cyan-400 dark:text-cyan-600 font-mono text-xs md:text-sm">
                          clear
                        </span>
                        <span className="text-gray-500 sm:ml-4 text-xs md:text-sm">
                          → Clear terminal
                        </span>
                      </div>
                    </AnimatedSpan>

                    <AnimatedSpan
                      delay={2400}
                      className="block text-gray-400 dark:text-gray-600 mt-4 md:mt-6 text-xs md:text-sm"
                    >
                      Type a command to get started...
                    </AnimatedSpan>
                  </div>
                )}

                {/* About Section */}
                {section === "about" && (
                  <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
                    <TypingAnimation className="text-green-400 dark:text-green-600 text-sm sm:text-base md:text-lg break-words">
                      $ cd about
                    </TypingAnimation>

                    <AnimatedSpan
                      delay={400}
                      className="text-blue-400 dark:text-blue-600 block text-xs sm:text-sm md:text-base"
                    >
                      → Loading profile...
                    </AnimatedSpan>

                    <AnimatedSpan
                      delay={900}
                      className="block mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 md:p-6 bg-gray-900 dark:bg-gray-100 rounded-lg border border-gray-700 dark:border-gray-300"
                    >
                      <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full items-center md:items-start text-center md:text-left">
                        {/* Profile Image */}
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                            <div className="w-full h-full rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                              <Image
                                src={Logo}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt="Project"
                                className="object-cover rounded-full"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-5">
                          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white dark:text-black">
                            Daniel
                          </h3>
                          <p className="text-cyan-400 dark:text-cyan-600 text-sm sm:text-base md:text-lg">
                            Front-End Developer & Software Engineering Student
                          </p>

                          <div className="text-gray-300 dark:text-gray-700 text-xs sm:text-sm md:text-base space-y-2 sm:space-y-3 break-words">
                            <p>Hey there! I'm a passionate developer...</p>
                            <p>
                              I enjoy the perfect blend of creativity and
                              logic...
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 pt-2 justify-center md:justify-start">
                            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-900/30 dark:bg-purple-200 text-purple-400 dark:text-purple-700 rounded-full text-xs sm:text-sm">
                              📍 Kano, Nigeria
                            </span>
                            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-green-900/30 dark:bg-green-200 text-green-400 dark:text-green-700 rounded-full text-xs sm:text-sm">
                              💼 Open to opportunities
                            </span>
                          </div>
                        </div>
                      </div>
                    </AnimatedSpan>

                    <TypingAnimation
                      className="mt-4 sm:mt-5 md:mt-6 text-gray-500 dark:text-gray-600 text-xs sm:text-sm md:text-base break-words"
                      delay={1800}
                    >
                      💡 Tip: Type cd  to return home
                    </TypingAnimation>
                  </div>
                )}

                {/* Education Section */}
                {section === "education" && (
                  <div className="space-y-2 md:space-y-3">
                    <TypingAnimation
                      className="text-green-400 dark:text-green-600 text-sm md:text-base break-words"
                      delay={0}
                    >
                      $ cd education
                    </TypingAnimation>

                    <AnimatedSpan
                      delay={400}
                      className="text-blue-400 dark:text-blue-600 block text-xs md:text-sm"
                    >
                      → Entering /education directory...
                    </AnimatedSpan>

                    <AnimatedSpan
                      delay={900}
                      className="text-yellow-300 dark:text-yellow-600 block mt-3 md:mt-4 text-xs md:text-sm"
                    >
                      ⚡ Loading credentials...
                    </AnimatedSpan>

                    <AnimatedSpan
                      delay={1400}
                      className="block mt-4 md:mt-6 p-3 md:p-4 bg-gray-900 dark:bg-gray-100 rounded-lg border border-gray-700 dark:border-gray-300"
                    >
                      <div className="flex flex-col sm:flex-row items-start gap-3">
                        <span className="text-2xl md:text-3xl">🎓</span>
                        <div className="w-full">
                          <div className="font-bold text-base md:text-lg text-white dark:text-black break-words">
                            Bachelor of Science in Software Engineering
                          </div>
                          <div className="text-gray-400 dark:text-gray-600 mt-1 text-xs md:text-sm break-words">
                            Bayero University Kano
                          </div>
                          <div className="flex flex-wrap items-center gap-2 mt-2 text-xs md:text-sm">
                            <span className="px-2 py-1 bg-green-900/30 dark:bg-green-200 text-green-400 dark:text-green-700 rounded whitespace-nowrap">
                              📅 2025 — Present
                            </span>
                            <span className="px-2 py-1 bg-purple-900/30 dark:bg-purple-200 text-purple-400 dark:text-purple-700 rounded whitespace-nowrap">
                              🚀 In Progress
                            </span>
                          </div>
                        </div>
                      </div>
                    </AnimatedSpan>

                    <TypingAnimation
                      className="mt-4 md:mt-6 text-gray-500 dark:text-gray-600 text-xs md:text-sm break-words"
                      delay={2400}
                    >
                      💡 Tip: Type cd  to return home
                    </TypingAnimation>
                  </div>
                )}

                {/* Experience Section */}
                {section === "experience" && (
                  <div className="space-y-2 md:space-y-3">
                    <TypingAnimation
                      className="text-green-400 dark:text-green-600 text-sm md:text-base break-words"
                      delay={0}
                    >
                      $ cd experience
                    </TypingAnimation>

                    <AnimatedSpan
                      delay={400}
                      className="text-blue-400 dark:text-blue-600 block text-xs md:text-sm"
                    >
                      → Entering /experience directory...
                    </AnimatedSpan>

                    <AnimatedSpan
                      delay={900}
                      className="text-yellow-300 dark:text-yellow-600 block mt-3 md:mt-4 text-xs md:text-sm"
                    >
                      ⚡ Fetching work history...
                    </AnimatedSpan>

                    <AnimatedSpan
                      delay={1400}
                      className="block mt-4 md:mt-6 p-3 md:p-4 bg-gray-900 dark:bg-gray-100 rounded-lg border border-gray-700 dark:border-gray-300"
                    >
                      <div className="flex flex-col sm:flex-row items-start gap-3">
                        <span className="text-2xl md:text-3xl">💼</span>
                        <div className="flex-1 w-full">
                          <div className="font-bold text-base md:text-lg text-white dark:text-black break-words">
                           Currently Front-End Developer At ReliAssist
                          </div>
                          <div className="text-gray-400 dark:text-gray-600 mt-1 text-xs md:text-sm break-words">
                            Specialized in modern web technologies
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="px-2 py-1 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs whitespace-nowrap">
                              React
                            </span>
                            <span className="px-2 py-1 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs whitespace-nowrap">
                              Next.js
                            </span>
                            <span className="px-2 py-1 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs whitespace-nowrap">
                              Tailwind CSS
                            </span>
                            <span className="px-2 py-1 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs whitespace-nowrap">
                              TypeScript
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 w-full">
                          <div className="font-bold text-base md:text-lg text-white dark:text-black break-words">
                            Front-End Developer At StemLabs
                          </div>
                          <div className="text-gray-400 dark:text-gray-600 mt-1 text-xs md:text-sm break-words">
                            Specialized in modern web technologies
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="px-2 py-1 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs whitespace-nowrap">
                              React
                            </span>
                            <span className="px-2 py-1 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs whitespace-nowrap">
                              Next.js
                            </span>
                            <span className="px-2 py-1 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs whitespace-nowrap">
                              Tailwind CSS
                            </span>
                            <span className="px-2 py-1 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs whitespace-nowrap">
                              TypeScript
                            </span>
                          </div>
                        </div>
                      </div>
                    </AnimatedSpan>

                    <AnimatedSpan
                      delay={2000}
                      className="block mt-3 md:mt-4 p-3 bg-gray-900/50 dark:bg-gray-100/50 rounded border-l-4 border-green-500"
                    >
                      <div className="text-xs md:text-sm text-gray-300 dark:text-gray-700">
                        <div className="font-semibold mb-2">
                          🚀 Notable Projects:
                        </div>
                        <ul className="space-y-1 ml-3 md:ml-4">
                          <li className="break-words">
                            • Real estate management dashboard
                          </li>
                          <li className="break-words">
                            • Full-stack CRUD applications
                          </li>
                          <li className="break-words">
                            • Admin panel interfaces
                          </li>
                          <li className="break-words">
                            Agro E-Commerce Platform{" "}
                          </li>
                          <li className="break-words">
                            YC Combinator Directory{" "}
                          </li>
                          <li className="break-words">
                            OfficeBox: Co-working & Tech Hub Booking Platform{" "}
                          </li>
                        </ul>
                      </div>
                    </AnimatedSpan>

                    <TypingAnimation
                      className="mt-4 md:mt-6 text-gray-500 dark:text-gray-600 text-xs md:text-sm break-words"
                      delay={2800}
                    >
                      💡 Tip: Type cd  to return home
                    </TypingAnimation>
                  </div>
                )}

                {/* Skills Section */}
                {section === "skills" && (
                  <div className="space-y-2 md:space-y-3">
                    <TypingAnimation
                      className="text-green-400 dark:text-green-600 text-sm md:text-base break-words"
                      delay={0}
                    >
                      $ cd skills
                    </TypingAnimation>

                    <AnimatedSpan
                      delay={400}
                      className="text-blue-400 dark:text-blue-600 block text-xs md:text-sm"
                    >
                      → Loading skill tree...
                    </AnimatedSpan>

                    <AnimatedSpan
                      delay={900}
                      className="text-yellow-300 dark:text-yellow-600 block mt-3 md:mt-4 text-xs md:text-sm"
                    >
                      ⚡ Scanning tech stack...
                    </AnimatedSpan>

                    {/* Frontend Skills */}
                    <AnimatedSpan
                      delay={1400}
                      className="block mt-4 md:mt-6 p-3 md:p-4 bg-gray-900 dark:bg-gray-100 rounded-lg border border-gray-700 dark:border-gray-300"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl md:text-2xl">🎨</span>
                          <h4 className="font-bold text-white dark:text-black text-sm md:text-base">
                            Frontend Development
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs">
                             React
                          </span>
                          <span className="px-3 py-1.5 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs">
                             Next.js
                          </span>
                          <span className="px-3 py-1.5 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs">
                             Tailwind CSS
                          </span>
                          <span className="px-3 py-1.5 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs">
                             TypeScript
                          </span>
                          <span className="px-3 py-1.5 bg-blue-900/30 dark:bg-blue-200 text-blue-400 dark:text-blue-700 rounded text-xs">
                             JavaScript
                          </span>
                        </div>
                      </div>
                    </AnimatedSpan>

                    {/* Styling & Design */}
                    <AnimatedSpan
                      delay={1900}
                      className="block p-3 md:p-4 bg-gray-900 dark:bg-gray-100 rounded-lg border border-gray-700 dark:border-gray-300"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl md:text-2xl">✨</span>
                          <h4 className="font-bold text-white dark:text-black text-sm md:text-base">
                            Styling & UI
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-pink-900/30 dark:bg-pink-200 text-pink-400 dark:text-pink-700 rounded text-xs">
                             CSS3
                          </span>
                          <span className="px-3 py-1.5 bg-pink-900/30 dark:bg-pink-200 text-pink-400 dark:text-pink-700 rounded text-xs">
                             Framer Motion
                          </span>
                          <span className="px-3 py-1.5 bg-pink-900/30 dark:bg-pink-200 text-pink-400 dark:text-pink-700 rounded text-xs">
                             shadcn/ui and other ui libraries
                          </span>
                          <span className="px-3 py-1.5 bg-pink-900/30 dark:bg-pink-200 text-pink-400 dark:text-pink-700 rounded text-xs">
                             Responsive Design
                          </span>
                        </div>
                      </div>
                    </AnimatedSpan>

                    {/* Tools & Others */}
                    <AnimatedSpan
                      delay={2400}
                      className="block p-3 md:p-4 bg-gray-900 dark:bg-gray-100 rounded-lg border border-gray-700 dark:border-gray-300"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl md:text-2xl">🛠️</span>
                          <h4 className="font-bold text-white dark:text-black text-sm md:text-base">
                            Tools & Version Control
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-orange-900/30 dark:bg-orange-200 text-orange-400 dark:text-orange-700 rounded text-xs">
                             Git
                          </span>
                          <span className="px-3 py-1.5 bg-orange-900/30 dark:bg-orange-200 text-orange-400 dark:text-orange-700 rounded text-xs">
                             GitHub
                          </span>
                          <span className="px-3 py-1.5 bg-orange-900/30 dark:bg-orange-200 text-orange-400 dark:text-orange-700 rounded text-xs">
                             VS Code
                          </span>
                          <span className="px-3 py-1.5 bg-orange-900/30 dark:bg-orange-200 text-orange-400 dark:text-orange-700 rounded text-xs">
                             npm/yarn
                          </span>
                          <span className="px-3 py-1.5 bg-orange-900/30 dark:bg-orange-200 text-orange-400 dark:text-orange-700 rounded text-xs">
                             Vercel
                          </span>
                        </div>
                      </div>
                    </AnimatedSpan>

                    <AnimatedSpan
                      delay={2900}
                      className="block mt-3 p-3 bg-gray-900/50 dark:bg-gray-100/50 rounded border-l-4 border-cyan-500"
                    >
                      <div className="text-xs md:text-sm text-gray-300 dark:text-gray-700">
                        <div className="font-semibold mb-1">
                          📚 Currently Learning:
                        </div>
                        <p className="ml-3 md:ml-4">
                          • Advanced React patterns & performance optimization
                          <br />
                          • Backend development with Node.js
                          <br />• Cloud deployment & DevOps basics
                        </p>
                      </div>
                    </AnimatedSpan>

                    <TypingAnimation
                      className="mt-4 md:mt-6 text-gray-500 dark:text-gray-600 text-xs md:text-sm break-words"
                      delay={3400}
                    >
                      💡 Tip: Type cd  to return home
                    </TypingAnimation>
                  </div>
                )}
              </div>
            </Terminal>
          </div>

          {/* Input Area */}
          <div className="mt-4 md:mt-6">
            <div className="flex items-center gap-2">
              <span className="text-green-400 dark:text-green-600 font-mono text-sm md:text-base flex-shrink-0">
                $
              </span>
              <input
                ref={inputRef}
                name="cmd"
                autoFocus
                autoComplete="off"
                placeholder="Type a command..."
                aria-label="Terminal command input"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const input = e.currentTarget.value;
                    if (input.trim()) {
                      handleCommand(input);
                    }
                    e.currentTarget.value = "";
                  }
                }}
                className="flex-1 p-2 rounded bg-gray-900 dark:bg-gray-100 border border-gray-700 dark:border-gray-400 outline-none focus:border-cyan-500 dark:focus:border-cyan-600 font-mono text-white dark:text-black placeholder-gray-600 dark:placeholder-gray-400 transition-colors text-xs md:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
