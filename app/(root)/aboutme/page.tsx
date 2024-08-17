import { Socials } from "@/components/socials";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="hidden md:block">
        <Socials isVertical />
      </div>
      <div className="min-h-screen space-y-10 px-5 pb-32 pt-12 md:ml-64 md:mr-64 md:px-0 md:pb-20">
        {/* ABOUT */}
        <div className="flex flex-col gap-x-7 gap-y-2 md:flex-row">
          <h2 className="animate-slide-in text-4xl text-teal-400">About</h2>
          <p className="animate-opacity-slide-in">{`A Full-Stack developer who started learning programming from 2020. fresh graduate of electrical engineering telecommunications s1 from the University of Education Indonesia. has the ability to design back-end using unit testing, clean architecture, and CI / CD using GitHub actions. Designing code with microservices architecture, MVC and also using APIs. Expert in using NextJs and also Next Auth. Expert in debugging and problem solving any code problems.`}</p>
        </div>
        {/* SKILLS */}
        <div className="flex flex-col gap-x-7 gap-y-2 md:flex-row">
          <h2 className="animate-slide-in text-4xl text-teal-400">Skills</h2>
          <div className="animate-opacity-slide-in">
            <h3 className="text-2xl font-bold">Certifications</h3>
            <ul className="space-y-2 pt-2">
              <li>
                <div className="h-fulls flex gap-x-2">
                  <Link
                    href="https://www.dicoding.com/certificates/2VX3RRV6JZYQ"
                    target="_blank"
                    className="translate-y-1 text-teal-400"
                  >
                    <LinkIcon className="h-5 w-5" />
                  </Link>
                  <span>{`Backend-Experts (2024): Completed Back-End Development Expert bootcamp from DICODING and scholarship from IDCamp`}</span>
                </div>
              </li>
              <li>
                <div className="h-fulls flex gap-x-2">
                  <Link
                    href="https://www.dicoding.com/certificates/81P2VEY2OPOY"
                    target="_blank"
                    className="translate-y-1 text-teal-400"
                  >
                    <LinkIcon className="h-5 w-5" />
                  </Link>
                  <span>{`AWS Cloud (2023): Completed Cloud Practitioner Essentials AWS Cloud bootcamp from DICODING and scholarship from IDCamp`}</span>
                </div>
              </li>
            </ul>
            <h3 className="pt-4 text-2xl font-bold">Coding Languages</h3>
            <ul className="list-disc columns-3 space-y-2 pl-6 pt-2">
              <li>NextJs</li>
              <li>ReactJs</li>
              <li>TypeScrtipt</li>
              <li>NodeJs</li>
              <li>Tailwind</li>
              <li>Prisma</li>
              <li>Jest</li>
              <li>Arduino IDE</li>
              <li>Python</li>
              <li>Laravel</li>
            </ul>
            <h3 className="pt-4 text-2xl font-bold">Soft Skills</h3>
            <ul className="list-disc space-y-2 pl-6 pt-2">
              <li>Leadership</li>
              <li>Public Speaking</li>
              <li>Task & Project Management</li>
            </ul>
          </div>
        </div>
        {/* EDUCATIONS */}
        <div className="flex flex-col gap-x-7 gap-y-2 md:flex-row">
          <h2 className="animate-slide-in text-4xl text-teal-400">
            Educations
          </h2>
          <div className="animate-opacity-slide-in">
            <div className="relative flex overflow-hidden pl-5">
              <div className="absolute flex h-[100%] translate-y-[2px] flex-col items-center">
                <div className="absolute h-5 w-5 rounded-full border-4 border-white" />
                <div className="absolute h-full w-1 translate-y-5 bg-white" />
              </div>
              <div className="space-y-2 pl-5">
                <h3 className="text-2xl font-bold">
                  Universitas Pendidikan Indonesia
                </h3>
                <div className="pl-6">
                  <ul className="list-disc space-y-2">
                    <li>
                      Create an{" "}
                      <span className="text-teal-400">
                        administration website
                      </span>{" "}
                      with the design using NextJs AppRouter and server action
                      also using Prisma, PostgreSQL, Next Auth, ReactJs and
                      TypeScript for the final project
                    </li>
                    <li>
                      Creating a{" "}
                      <span className="text-teal-400">miniature smarthome</span>{" "}
                      consisting of smart gates, smart doors, gas detectors and
                      smart lights using ESP32 and IoT Cloud during an
                      internship at PT Inovindo Digital Media
                    </li>
                    <li>
                      {`Became `}
                      <span className="text-teal-400">
                        chairman of the entrepreneurship sub-field
                      </span>
                      {` in the
                      electrical student association (HME)`}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="relative flex translate-y-[-2px] overflow-hidden pl-5">
              <div className="absolute flex h-[100%] translate-y-[2px] flex-col items-center">
                <div className="absolute h-5 w-5 rounded-full border-4 border-white" />
                <div className="absolute h-full w-1 translate-y-5 bg-white" />
              </div>
              <div className="space-y-2 pl-5">
                <h3 className="text-2xl font-bold">SMA N 2 Cibinong, Bogor</h3>
                <p className="">{`A Full-Stack developer who started learning programming from 2020. fresh graduate of electrical engineering telecommunications s1 from the University of Education Indonesia. has the ability to design back-end using unit testing, clean architecture, and CI / CD using GitHub actions. Designing code with microservices architecture, MVC and also using APIs. Expert in using NextJs and also Next Auth. Expert in debugging and problem solving any code problems.`}</p>
              </div>
            </div> */}
          </div>
        </div>
        {/* EXPERIENCES */}
        <div className="flex flex-col gap-x-7 gap-y-2 md:flex-row">
          <h2 className="animate-slide-in text-4xl text-teal-400">
            Experiences
          </h2>
          <div className="animate-opacity-slide-in">
            <div className="relative flex overflow-hidden pl-5">
              <div className="absolute flex h-[100%] translate-y-[2px] flex-col items-center">
                <div className="absolute h-5 w-5 rounded-full border-4 border-white" />
                <div className="absolute h-full w-1 translate-y-5 bg-white" />
              </div>
              <div className="space-y-2 pl-5">
                <h3 className="text-2xl font-bold">
                  Project-Based Virtual Intern: Fullstack Developer BTPN Syariah
                  x Rakamin Academy
                </h3>
                <div className="pb-10">
                  I work as a full-stack developer, responsible for creating and
                  maintaining web application. My role involves designing user
                  interface, developing server-side project, managing databases,
                  developed API with GO, writing clean architecture code.
                </div>
              </div>
            </div>
            <div className="relative flex translate-y-[-2px] overflow-hidden pl-5">
              <div className="absolute flex h-[100%] translate-y-[2px] flex-col items-center">
                <div className="absolute h-5 w-5 rounded-full border-4 border-white" />
                <div className="absolute h-full w-1 translate-y-5 bg-white" />
              </div>
              <div className="space-y-2 pl-5">
                <h3 className="text-2xl font-bold">
                  Project Manager Internship at PT. Inovindo Digital Media
                </h3>
                <p>
                  Working on a project to create a Prototypr Smarthome module
                  using IoT. I am working on it,
                </p>
                <ul className="list-disc pl-6">
                  <li>Developed a project timeline</li>
                  <li>
                    Organized job desk members according to their respective
                    abilities
                  </li>
                  <li>Ensured efficient organization of job desks</li>
                  <li>
                    Managed the process including planning, implementation,
                    supervision, and evaluation of the project
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ORGANIZATIONS */}
        <div className="flex flex-col gap-x-7 gap-y-2 md:flex-row">
          <h2 className="animate-slide-in text-4xl text-teal-400">
            Organizations
          </h2>
          <div className="animate-opacity-slide-in">
            <div className="relative flex overflow-hidden pl-5">
              <div className="absolute flex h-[100%] translate-y-[2px] flex-col items-center">
                <div className="absolute h-5 w-5 rounded-full border-4 border-white" />
                <div className="absolute h-full w-1 translate-y-5 bg-white" />
              </div>
              <div className="space-y-2 pl-5">
                <h3 className="text-2xl font-bold">
                  {`Chairman of the Entrepreneurship Sub-Field at Himpunan
                  Mahasiswa Teknik Elektro (HME)`}
                </h3>
                <div>
                  <p>
                    As the head of the entrepreneurship sub-field, I do the
                    following:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Develop a work program timeline</li>
                    <li>Arrange job desks of entrepreneurship members</li>
                    <li>
                      Supervise the development and job desks of each member of
                      entrepreneurship
                    </li>
                    <li>
                      Evaluate the performance of the entrepreneurship sub-field
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
