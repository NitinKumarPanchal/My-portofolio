import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, education, experience } = frontmatter;

  return (
    <>
      <section className="section">
        <div className="container text-center">
          {/* {image && (
            <div className="mb-5">
              <Image
                src={image}
                width={1298}
                height={616}
                alt={title}
                className="rounded-lg"
                priority={true} />
            </div>
          )} */}
          {markdownify(title, "h1", "h1 text-left lg:text-[40px] mt-12")}

          <div className="content text-left">
            <MDXRemote {...mdxContent} components={shortcodes} />
          </div>

          <div className="row mt-24 text-left lg:flex-nowrap">
            <div className="lg:col-6 ">
              <div className="rounded border border-border p-6 dark:border-darkmode-border ">
                {markdownify(education.title, "h2", "section-title mb-12")}
                <div className="row">
                  {education.degrees.map((degree, index) => (
                    <div className="mb-7 md:col-6" key={"degree-" + index}>
                      <h4 className="text-base lg:text-[25px]">
                        {degree.university}
                      </h4>
                      <p className="mt-2">{degree.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="experience mt-10 lg:mt-0 lg:col-6">
              <div className="rounded border border-border p-6 dark:border-darkmode-border ">
                {markdownify(experience.title, "h2", "section-title mb-11")}
                <ul className="row">
                  {experience?.list?.map((item, index) => (
                    <li
                      className="mb-2 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6"
                      key={"experience-" + index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container text-center">
          <div className="row text-left lg:flex-nowrap">
            <div className="">
              <div className="rounded border border-border p-6 dark:border-darkmode-border ">
                {markdownify("Work Experience", "h2", "section-title mb-12")}
                <div className="row">
                  <div className="mb-7">
                    <h4 className="text-base lg:text-[25px]">
                      {"Dentistry Automation"}
                    </h4>
                    <p className="mt-2">{" • Worked on Dentistry Automation project to added modules for patient management, in Angular 13 Integrated with APIs .NET Core 6."}</p>
                  </div>
                  <div className="mb-7">
                    <h4 className="text-base lg:text-[25px]">
                      {"FocusFS"}
                    </h4>
                    <p className="mt-2">{"• Worked on FocusFS project is migrated into Angular version of 13 to 15 and  managed data of workers."}</p>
                  </div>
                  <div className="mb-7">
                    <h4 className="text-base lg:text-[25px]">
                      {"TMS(Trainee Management System)"}
                    </h4>
                    <p className="mt-2">{"• Worked on TMS(Trainee Management System) Angular as front-end and Integreted with APIs.NET(C#) as back-end."}</p>
                  </div>
                  <div className="mb-7">
                    <h4 className="text-base lg:text-[25px]">
                      {"ARG atlas"}
                    </h4>
                    <p className="mt-2">{"• Developed whole website UI."}</p>
                  </div>
                  <div className="mb-7">
                    <h4 className="text-base lg:text-[25px]">
                      {"Measure PM"}
                    </h4>
                    <p className="mt-2">{" • Solving UI side issues."}</p>
                  </div>
                  <div className="mb-7">
                    <h4 className="text-base lg:text-[25px]">
                      {"QEdge , Lamda , Intas"}
                    </h4>
                    <p className="mt-2">{" • Solving UI side issues."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container text-center">
          <div className="row text-left lg:flex-nowrap">
            <div className="">
              <div className="rounded border border-border p-6 dark:border-darkmode-border ">
                {markdownify("Personal Projects", "h2", "section-title mb-12")}
                <div className="row">
                  <div className="mb-7">
                    <h4 className="text-base lg:text-[25px]">
                      {"Clone-Boat-Lifestyle "}
                    </h4>
                    <p className="mt-2">{" • Used MEAN stack technology for building full stack applications."}</p>
                    <p className="mt-2">{" • MongoDB—document database Express—a Node.js framework for building APIs Angular—front-end application framework Node.js—server-side JavaScript runtime environment."}</p>
                    <p className="mt-2">{" • View all Product "}</p>
                    <p className="mt-2">{" • Add to Product"}</p>
                    <p className="mt-2">{" • Order the Product (Realtime is not) and Track, generate invoices "}</p>
                    <p className="mt-2">{" • Update existing Product and more"}</p>
                    <p className="mt-2"><a href="https://boat-web-application.vercel.app/dashboard" target="black">{" • Live Demo"}</a></p>
                  </div>
                  <div className="mb-7">
                    <h4 className="text-base lg:text-[25px]">
                      {"Alumni Portal"}
                    </h4>
                    <p className="mt-2">{"• Alumni information System is meantfor maintaining the information of the students who left the institution on completion of the graduation."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container text-center">
          <div className="row text-left lg:flex-nowrap">
            <div className="">
              <div className="rounded border border-border p-6 dark:border-darkmode-border ">
                {markdownify("Certification", "h2", "section-title mb-12")}
                <div className="row">
                  <div className="mb-7">
                    <h4 className="text-base lg:text-[25px]">
                      {"HTML,CSS and JavaScript"}
                    </h4>
                    <p className="mt-2">{"• Certification of Completed HTML,CSS and JavaScript online course which offered byCoursera & Hacker Rank."}</p>
                  </div>
                  <div className="mb-7">
                    <h4 className="text-base lg:text-[25px]">
                      {"Structured Query Languge"}
                    </h4>
                    <p className="mt-2">{"• Certification of Completed Introduction to Structured Query Languge (SQL) online coursewhich offered by Coursera & Hacker Rank "}</p>
                  </div>
                  <div className="mb-7">
                    <h4 className="text-base lg:text-[25px]">
                      {"Computer Network"}
                    </h4>
                    <p className="mt-2">{"• Certification of Completed Computer Network online course which offered by NPTEL TCS"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
