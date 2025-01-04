import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/your-profile-photo.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 object-cover w-40 h-40 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Full-Stack Developer | Problem Solver
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi, I’m <strong>Shahar Zidon</strong>, a full-stack developer who
          loves crafting tailored solutions for complex problems. From intuitive
          frontends to powerful backend systems, I deliver end-to-end projects
          designed to make an impact.
        </p>
        <p>
          I specialize in building applications that are not just functional but
          also creative and engaging. Whether you need a sleek user experience
          or a robust backend, I bring ideas to life with attention to detail
          and scalability in mind.
        </p>
        <p>
          Let’s create something meaningful together—unique solutions for unique
          challenges.
        </p>
      </div>
    </section>
  );
}
