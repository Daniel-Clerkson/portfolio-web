import { AuroraText } from "@/components/ui/aurora-text";
import ProjectCards from "@/components/ProjectCards";

const page = () => {
  return (
    <>
      <div className="head mt-10">
        <div className="heading flex justify-center mb-10">
          <h1 className="text-5xl font-semibold">
            My{" "}
            <AuroraText>Projects</AuroraText>
          </h1>
        </div>
      </div>
      <div className="main h-full">
        <ProjectCards />
      </div>
    </>
  );
};

export default page;
