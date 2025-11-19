import { MorphingText } from "@/components/ui/morphing-text";

// Words focused on a developer's career goals/availability
const CONTACT_WORDS = ["Collaborate", "Hire Me", "Let's Chat"];

const ContactSection = () => {
  return (
    // Lower vertical padding is often better for a section, not the whole page.
    <section className="flex flex-col items-center justify-center py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        {/* Header Section */}
        <div className="head mb-4">
          {/* Tone is now invitation-focused, using smaller text for a section title */}
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4">
            Ready for the next step?
          </p>
          <MorphingText
            // Text size adjusted down slightly to fit a section title better
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            texts={CONTACT_WORDS}
          />
        </div>

        {/* Text Section */}
        <div className="text mt-6 md:mt-8">
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {/* New personal and direct copy */}
            I'm currently seeking new development opportunities and am always
            open to discussing exciting projects. Whether you have a full-time
            role, a challenging freelance contract, or just want to connect
            about tech, feel free to reach out. **I respond quickly!**
          </p>
        </div>

        {/* --- You would place the actual Contact Form or Links here --- */}
        <div className="mt-8 flex justify-center space-x-4">
          {/* Placeholder for your primary contact action (e.g., Email Button) */}
          <a
            href="mailto:danielclerkson68@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
          >
            Send Me an Email
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-clerkson-80335a33b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
