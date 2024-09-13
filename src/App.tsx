import { Mail, Phone, Printer } from "lucide-react";
import { forwardRef, type Ref, useRef } from "react";

function Github() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
      >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </>
  );
}

function IconLink({
  icon,
  href,
  children,
}: {
  icon: JSX.Element;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="flex items-center gap-2 hover:underline text-link"
      href={href}
    >
      {icon} {children}
    </a>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-3xl font-semibold font-montserrat">{title}</h2>
      <hr className="my-2 h-1 mx-auto bg-gray-200 border-0 rounded-sm" />
      {children}
    </section>
  );
}

type ExperienceProps = {
  title: string;
  date: string;
  subtitle?: string;
  children?: React.ReactNode;
};

function Experience({ title, date, subtitle, children }: ExperienceProps) {
  return (
    <div className="my-4">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-bold">{title}</h3>
        <span>{date}</span>
      </div>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
      {children && <div>{children}</div>}
    </div>
  );
}

type SkillProps = {
  name: string;
  level: number;
  subskills?: string[];
  description?: string;
};

function Skill({ name, level, subskills, description }: SkillProps) {
  return (
    <div>
      <div className="flex items-center gap-2 justify-between">
        <h3 className="font-semibold">{name}</h3>

        <div className="h-2 w-32 bg-gray-400 rounded-lg">
          <div
            className="h-full bg-sky-500 rounded-lg"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
      <div className="ml-2">
        {subskills && (
          <ul className="text-sm ml-0.5">
            {subskills.map((subskill) => (
              <li key={subskill} className="flex items-center gap-2">
                <div className="bg-gray-400 rounded-full h-1.5 w-1.5" />
                <span>{subskill}</span>
              </li>
            ))}
          </ul>
        )}
        {description && <p className="text-sm">{description}</p>}
      </div>
    </div>
  );
}

const CV = forwardRef((_props, ref: Ref<HTMLDivElement>) => {
  return (
    <div ref={ref} className="w-A4 h-A4 p-6 bg-white overflow-hidden">
      <div className="flex flex-row gap-4 items-center justify-between mb-4">
        <h1 className="text-6xl font-bold font-montserrat antialiased text-transparent bg-clip-text inline-block bg-gradient-to-r from-sky-500 to-blue-500">
          Edward Jex
        </h1>
        <ul className="font-semibold text-lg content-end h-ful">
          <li>
            <IconLink icon={<Mail />} href="mailto:edwardjex@live.co.uk">
              <span>edwardjex@live.co.uk</span>
            </IconLink>
          </li>
          <li>
            <IconLink icon={<Phone />} href="tel:+447917 572525">
              <span>+44 7917 57 2525</span>
            </IconLink>
          </li>
          <li>
            <IconLink icon={<Github />} href="https://github.com/Jex-y">
              <span>GitHub/Jex-y</span>
            </IconLink>
          </li>
        </ul>
      </div>
      <p className="mb-2">
        I am a 4th year Computer Science student at Durham University with
        industry experience in software development. For my integrated masters
        project, I am researching the effect of different energy saving
        techniques on the performance of CNN's deployed on edge devices. My
        interests include machine learning, web development, and data science
        and I often work on personal projects in these areas. I am looking for a
        graduate role.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Section title="Skills">
            <Skill
              name="Data Science"
              level={90}
              subskills={[
                "ML / DL with Pytorch, JAX, and Scikit-learn",
                "Data analysis with Pandas / Polars and NumPy",
                "Visualization with Matplotlib and Seaborn + web technologies",
              ]}
              description="Skills developed and proven through university coursework and personal projects"
            />
            <Skill
              name="Web Development"
              level={80}
              subskills={["Typescript, React, Redux, Next.js, TailwindCSS"]}
              description="I have experience building web applications with modern technologies. This CV is built with React and TailwindCSS."
            />
            <Skill
              name="DevOps"
              level={80}
              subskills={[
                "Continous Integration and Deployment",
                "GCP and AWS + Infrastructure as Code",
                "Linux / Unix command line skills",
              ]}
              description="At Cisco I worked with CI/CD pipelines on Jenkins. For each of my personal projects I aim to build CI/CD pipelines and deploy to cloud platforms."
            />
            <Skill name="Rust" level={70} />
            <Skill name="C/C++" level={50} />
            <Skill name="Java" level={50} />
          </Section>
          <Section title="Education">
            <Experience
              title="Durham University"
              subtitle="Computer Science MEng"
              date="2021 - 2025"
            >
              <p className="text-sm ml-2">
                On track for a first class degree. Modules include: Deep /
                Reinforement Learning, Advanced Computer Vision, Advanced
                Algorithms, Quantum Computing, and Parallel Scientific
                Computing.
              </p>
            </Experience>
            <Experience
              title="A Levels"
              subtitle="4 A*s: Maths, Further Maths, Physics, Computer Science"
              date="2019 - 2021"
            />
          </Section>
        </div>
        <div className="grid gap-4">
          <Section title="Experience">
            <Experience
              title="Undergraduate Teaching Assistant"
              subtitle="Department of Computer Science"
              date="2023 - 2024"
            >
              <p className="text-sm ml-2">
                I assist in the delivery of the 1<sup>st</sup> and{" "}
                <sup>2nd</sup> year computer science courses by running lab
                sessions. This involves helping students with weekly
                assignments, answering questions, and explaining concepts.
                Students have a wide range of abilities and backgrounds,
                requiring me to be able to explain concepts in multiple ways and
                adapt to different learning styles.
              </p>
            </Experience>
            <Experience
              title="Cisco Web Development Intern"
              subtitle="Webex Web Client"
              date="Summer 2022"
            >
              <p className="text-sm ml-2">
                I worked on the Webex web client team, developing new features
                and fixing bugs. Through this I gained experience with React and
                Redux and learned how to work on software as part of a team.
              </p>
            </Experience>

            <Experience
              title="Boat Club President"
              subtitle="Trevelyan College Boat Club"
              date="2023 - 2024"
            >
              <p className="text-sm ml-2">
                This role encompassed running the finances of the club,
                organizing training and racing events, and managing the other
                members of the committee. Over the year, we succeeded in
                replacing aging equipment, increasing the number of members, and
                improving the club's racing performance. This role pushed me to
                develop my leadership, organization, time, project, and team
                managment skills, all of which are transferable to a
                professional environment.
              </p>
            </Experience>
            <Experience
              title="Durham College Rowing Webmaster"
              subtitle="Trevelyan College Boat Club"
              date="2024 - 2025"
            >
              <p className="text-sm ml-2">
                As webmaster, I was responsible for maintaining and updating the
                DCR website. I used this opportunity to deploy a long term
                personal project of mine: a river level prediction model and
                <a
                  href="https://river.edjex.dev"
                  className="text-link hover:underline"
                >
                  {" "}
                  web dashboard
                </a>
                . This allows clubs to make informed decisions about whether it
                is safe to row on the river.
              </p>
            </Experience>
          </Section>
        </div>
      </div>
    </div>
  );
});

import { useReactToPrint } from "react-to-print";

function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "CV - Edward Jex",
  });

  return (
    <>
      <div className="flex content-center w-full h-full bg-zinc-800">
        <div className="mx-auto my-auto shadow-lg rounded-lg inline-block">
          <CV ref={contentRef} />
        </div>
        <div className="absolute bottom-10 right-10">
          <button
            onClick={handlePrint}
            type="button"
            className="bg-zinc-500 text-white p-2 rounded-lg m-2 h-10"
          >
            <Printer />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
