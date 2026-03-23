import { useState, useEffect } from "react";

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    const fetchData = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      setProjects(data);
    };
    setLoading(false);
    fetchData();
  }, []);

  return (
    <div className="p-10 mt-10">
      <div className="flex items-end md:items-center justify-between mb-10">
        <h2 className="text-5xl font-black uppercase">Selected Works</h2>
        <p className="red font-mono tracking-widest text-[10px]">01 // PROJECTS</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          projects?.map((project: any, index: number) => (
            <div
              key={project.id}
              className={`group border border-gray-200 p-6 flex flex-col gap-4 hover:border-black transition-all cursor-pointer ${
                index === 1 ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#ff3c2e] tracking-widest">
                  0{index + 1}
                </span>
                {index === 1 && (
                  <span className="text-xs border border-[#ff3c2e] text-[#ff3c2e] px-2 py-0.5 font-mono tracking-widest">
                    FEATURED
                  </span>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl font-black uppercase leading-none">
                {project.title}
              </h3>

              <p
                className={`text-sm leading-relaxed ${index === 1 ? "text-gray-400" : "text-gray-500"}`}
              >
                {project.description}
              </p>

              {project.img && (
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-200">
                {project.technologies.map((tech: any) => (
                  <span
                    key={tech.name}
                    className={`text-xs font-mono px-2 py-1 ${
                      index === 1
                        ? "bg-gray-800 text-gray-300"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 mt-2">
                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    className="text-xs font-mono tracking-widest hover:text-[#ff3c2e] transition-colors uppercase"
                  >
                    Source →
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-xs font-mono tracking-widest hover:text-[#ff3c2e] transition-colors uppercase"
                  >
                    Live →
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Works;
