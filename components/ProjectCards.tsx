"use client";
import { useEffect, useState } from "react";
import { Eye, Github } from "lucide-react";
import { CometCard } from "./ui/comet-card";
import Image from "next/image";
import Link from "next/link";
import { ClipLoader } from "react-spinners";

// Types
interface Technology {
  name: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  img: string;
  source: string;
  link: string;
  technologies: Technology[];
}

const ProjectCards: React.FC = () => {
  const [readMore, setReadMore] = useState<boolean>(false);
  const [dataVal, setDataVal] = useState<Project[] | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);
  
  const toggleReadMore = (): void => setReadMore((prev) => !prev);

  const getProjects = async (): Promise<void> => {
    try {
      setFetching(true); 
      const res = await fetch("/api", { method: "GET" });

      if (!res.ok) {
        throw new Error("Error Fetching data");
      }

      const response: Project[] = await res.json();
      console.log(response);
      setDataVal(response);
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false); 
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 px-4 sm:px-6 lg:px-8 py-8">
      {fetching ? (
        <ClipLoader />
      ) : (
        dataVal?.map((data) => (
          <CometCard
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl m-5"
            key={data.id}
          >
            <div className="info">
              <div className="img relative group rounded-t-2xl">
                <Image
                  loading="eager"
                  src={`${data.img}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Project"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-2xl"
                />
              </div>

              <div className="text p-4 sm:p-5 md:p-6">
                <h1 className="font-semibold text-lg sm:text-xl md:text-2xl hover:underline cursor-pointer mb-3 sm:mb-4 md:mb-5 text-gray-900 dark:text-white">
                  {data.title}
                </h1>
                <p
                  className={`text-xs sm:text-sm cursor-pointer leading-relaxed text-gray-600 dark:text-gray-300 ${
                    readMore ? "line-clamp-none" : "line-clamp-2"
                  }`}
                >
                  {data.description}
                </p>
                <p
                  onClick={toggleReadMore}
                  className="cursor-pointer text-xs sm:text-sm mt-2 sm:mt-3 hover:underline font-semibold text-blue-600 dark:text-blue-400"
                >
                  {readMore ? "See Less" : "See More"}
                </p>
              </div>

              <div className="tags p-4 sm:p-5 md:p-6">
                <p className="head font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-1 h-5 bg-red-500 rounded-full"></span>
                  Technologies Used
                </p>
                <div className="tag-div flex flex-wrap items-center gap-2">
                  {data.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className={`tag text-xs sm:text-sm ${tech.color} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105 cursor-pointer`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="links flex items-center justify-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 border-t border-gray-200 dark:border-0">
              <Link href={`${data.link}`} target="_blank">
                <button className="flex items-center gap-2 cursor:pointer px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Preview</span>
                </button>
              </Link>
              <Link href={data.source}>
                <button className="flex items-center gap-2 cursor:pointer px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-900 hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Code</span>
                </button>
              </Link>
            </div>
          </CometCard>
        ))
      )}
    </div>
  );
};

export default ProjectCards;