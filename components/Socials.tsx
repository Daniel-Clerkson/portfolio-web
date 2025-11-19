import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="justify-end md:fixed right-10 bottom-10 p-5 flex gap-5 items-center">
      <Link href="https://github.com/Daniel-Clerkson" target="_blank">
        <FaGithub className="size-7 cursor-pointer" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/daniel-clerkson-80335a33b/"
        target="_blank"
      >
        <FaLinkedinIn className="size-7 cursor-pointer" />
      </Link>
    </div>
  );
};

export default Socials;
