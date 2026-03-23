const Marquee = () => {
  const items = ["NEXT.JS", "TYPESCRIPT", "REACT", "SUPABASE", "TAILWIND", "GRAPHQL", "VERCEL", "GIT", "LINUX", "BASH"];

  return (
    <div className="w-full overflow-hidden flex flex-col gap-2 my-4">
      {/* First - normal */}
      <div className="w-full bg-white border shadow-xl overflow-hidden py-4 rotate-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="text-[#ff3c2e] font-black text-sm tracking-widest mx-6">
              {item} <span className="text-white mx-2">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Second - slanted */}
      <div className="w-full bg-white border shadow-xl overflow-hidden py-4 -rotate-5 scale-110">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="text-[#ff3c2e] font-black text-sm tracking-widest mx-6">
              {item} <span className="text-white mx-2">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee