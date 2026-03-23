import React from "react";

const Stacks = () => {
  const arsenal = [
    { category: "FRONTEND", tech: "React / Next.js" },
    { category: "STYLING", tech: "Tailwind CSS" },
    { category: "BACKEND", tech: "Supabase / Node" },
    { category: "API", tech: "GraphQL / REST" },
    { category: "LANGUAGES", tech: "TypeScript / Go" },
    { category: "INFRASTRUCTURE", tech: "Vercel / Docker" },
    { category: "DESIGN", tech: "Figma / Adobe" },
    { category: "WORKFLOW", tech: "Agile / Git" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8 md:p-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            The Arsenal
          </h1>
        </div>

        {/* The Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gray-200 gap-[1px] border-b-0 border-b">
          {arsenal.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 transition-colors hover:bg-[#ff3c2e] group"
            >
              <p className="text-xs font-bold group-hover:text-white tracking-widest text-[#ff3c2e] uppercase mb-4">
                {item.category}
              </p>
              <h2 className="group-hover:text-white text-xl md:text-2xl font-bold text-gray-900">
                {item.tech}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stacks;