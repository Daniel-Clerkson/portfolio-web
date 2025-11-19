import { Highlighter } from "@/components/ui/highlighter";
import { RainbowButton } from "./ui/rainbow-button";


const Hero = () => {
  return (
    <>
      <div className="main flex items-center justify-center h-full w-full min-h-[70vh] px-4 sm:px-6 lg:px-8bg-transparent transition-colors duration-300">

        <div className="heading text-center max-w-5xl mx-auto">
          <div className="head">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black dark:text-white">
              <h1 className="mb-4 sm:mb-5 leading-tight">
                Hi, I am{" "}
                <Highlighter action="underline" color="#FF9800">
                  Daniel{" "}
                </Highlighter>{" "}
              </h1>
              <h1 className="leading-tight">
                A{" "}
                <span className="inline-block">
                  <Highlighter action="highlight" color="#87CEFA">
                    Front-End Developer
                  </Highlighter>
                </span>
              </h1>
              <div className="btn mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <RainbowButton
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg md:text-xl w-full sm:w-auto px-6 sm:px-8 hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-shadow duration-300"
                >
                  View My Work
                </RainbowButton>
                <RainbowButton
                  size="lg"
                  className="text-base sm:text-lg md:text-xl w-full sm:w-auto px-6 sm:px-8 hover:shadow-2xl dark:hover:shadow-purple-500/20 transition-shadow duration-300"
                >
                  Get In Touch{" "}
                </RainbowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
