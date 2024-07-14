import { Socials } from "@/components/socials";
import arsys from "@/public/pict-projects/arsys.png";
import ivtec from "@/public/pict-projects/ivtec.png";
import backend from "@/public/pict-projects/backend.png";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  const nextJsProjects = [
    {
      picture: arsys,
      title: "Web Administration Arsys",
      desc: "Tools: NextAuth v5, Prisma, NoSQL Database from Neon.tech, Zod Resolver, TypeScript, shadcn/ui, tailwind",
      href: "https://arsys.rifkialfiann.my.id/",
    },
  ];
  const htmlTailwindProjects = [
    {
      picture: ivtec,
      title: "IEEE International Student Conference 3.0",
      desc: "Tools: HTML, Tailwind CSS, JS",
      href: "https://fptk.upi.edu/ieee-conference/index.html",
    },
  ];
  const backEndProjects = [
    {
      picture: backend,
      title: "forum-api",
      desc: "(Clean Architecture) Tools: Hapi, Hapi-JWT, node-pg-migrate, jest, ci/cd github actions",
      href: "https://github.com/Riverif/forum-api",
    },

    {
      picture: backend,
      title: "openmusic-api",
      desc: "Tools: Hapi, Hapi-JWT, node-pg-migrate, rabbitmq, redis",
      href: "https://github.com/Riverif/openmusic-api",
    },
    {
      picture: backend,
      title: "openmusic-api-consumer",
      desc: "Tools: Hapi, Hapi-JWT, node-pg-migrate, rabbitmq, redis",
      href: "https://github.com/Riverif/openmusic-api-consumer",
    },
    {
      picture: backend,
      title: "go-jwt",
      desc: "Tools: Go-Language, MySQL",
      href: "https://github.com/Riverif/go-jwt",
    },
    {
      picture: backend,
      title: "notes-app-back-end",
      desc: "Tools: Hapi, Hapi-JWT, node-pg-migrate",
      href: "https://github.com/Riverif/notes-app-back-end",
    },
  ];

  return (
    <>
      <Socials isVertical />
      <div className="flex justify-center">
        <div className="min-h-screen w-9/12 space-y-10 pb-20 pt-10">
          <div className="space-y-6">
            <h2 className="animate-slide-up text-4xl text-teal-400 underline underline-offset-4">{`Backend Projects`}</h2>
            <div className="animate-opacity-slide-in grid grid-cols-3 gap-x-8 gap-y-8">
              {backEndProjects.map((project) => (
                <div
                  key={project.title}
                  className="w-fit space-y-2 rounded-xl border-2 border-white p-4"
                >
                  <Link href={project.href} target="_blank">
                    <div className="group relative overflow-hidden rounded-xl">
                      <div className="absolute z-20 mx-auto my-auto flex h-full w-full flex-col items-center justify-center transition-all group-hover:bg-black/80">
                        <p className="hidden group-hover:block">
                          Check the website
                        </p>
                        <p className="hidden text-center text-teal-400 group-hover:block">
                          {project.href}
                        </p>
                      </div>
                      <Image
                        className="rounded-xl bg-slate-200 transition-all group-hover:scale-150 group-hover:blur-[1px]"
                        src={project.picture}
                        alt={project.title}
                      />
                    </div>
                  </Link>
                  <p className="text-teal-400">{project.title}</p>
                  <p>{project.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="animate-slide-up text-4xl text-teal-400 underline underline-offset-4">{`NextJs Projects`}</h2>
            <div className="animate-opacity-slide-in grid grid-cols-3 gap-x-8 gap-y-8">
              {nextJsProjects.map((project) => (
                <div
                  key={project.title}
                  className="w-fit space-y-2 rounded-xl border-2 border-white p-4"
                >
                  <Link href={project.href} target="_blank">
                    <div className="group relative overflow-hidden rounded-xl">
                      <div className="absolute z-20 mx-auto my-auto flex h-full w-full flex-col items-center justify-center transition-all group-hover:bg-black/80">
                        <p className="hidden group-hover:block">
                          Check the website
                        </p>
                        <p className="hidden text-teal-400 group-hover:block">
                          {project.href}
                        </p>
                      </div>
                      <Image
                        className="rounded-xl bg-slate-200 transition-all group-hover:scale-150 group-hover:blur-[1px]"
                        src={project.picture}
                        alt={project.title}
                      />
                    </div>
                  </Link>
                  <p className="text-teal-400">{project.title}</p>
                  <p>{project.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="animate-slide-up text-4xl text-teal-400 underline underline-offset-4">{`HTML + Tailwind Projects`}</h2>
            <div className="animate-opacity-slide-in grid grid-cols-3 gap-x-8 gap-y-8">
              {htmlTailwindProjects.map((project) => (
                <div
                  key={project.title}
                  className="w-fit space-y-2 rounded-xl border-2 border-white p-4"
                >
                  <Link href={project.href} target="_blank">
                    <div className="group relative overflow-hidden rounded-xl">
                      <div className="absolute z-20 mx-auto my-auto flex h-full w-full flex-col items-center justify-center transition-all group-hover:bg-black/80">
                        <p className="hidden group-hover:block">
                          Check the website
                        </p>
                        <p className="hidden text-center text-teal-400 group-hover:block">
                          {project.href}
                        </p>
                      </div>
                      <Image
                        className="rounded-xl bg-slate-200 transition-all group-hover:scale-150 group-hover:blur-[1px]"
                        src={project.picture}
                        alt={project.title}
                      />
                    </div>
                  </Link>
                  <p className="text-teal-400">{project.title}</p>
                  <p>{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
