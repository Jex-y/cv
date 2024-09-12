import { Mail, Phone } from "lucide-react";

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
        <span className="font-semibold">{name}</span>

        <div className="h-2 w-32 bg-gray-400 rounded-lg">
          <div
            className="h-full bg-blue-500 rounded-lg"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
      <div className="ml-4">
        {subskills && (
          <ul className="ml-4 text-gray-600 list-disc text-sm">
            {subskills.map((subskill) => (
              <li key={subskill}>{subskill}</li>
            ))}
          </ul>
        )}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function CV() {
  return (
    <div className="w-A4 h-A4 p-6 bg-white overflow-hidden">
      <div className="flex flex-row gap-4 items-center justify-between mb-4">
        <h1 className="text-5xl font-bold font-montserrat">Edward Jex</h1>
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
              name="Devops"
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
              <p className="text-sm mx-2">
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
              title="Cisco Web Development Intern"
              subtitle="Webex Web Client"
              date="Summer 2022"
            >
              <p className="text-sm mx-2">
                I worked on the Webex web client team, developing new features
                and fixing bugs. Through this I gained experience with React and
                Redux and learned how to work on software as part of a team.
              </p>
            </Experience>
            <Experience
              title="Undergraduate Teaching Assistant"
              subtitle="Department of Computer Science"
              date="2023 - 2024"
            >
              <p className="text-sm mx-2">
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
              title="Boat Club President"
              subtitle="Trevelyan College Boat Club"
              date="2023 - 2024"
            >
              <p className="text-sm mx-2">
                After having been the club treasurer for a year, I was elected
                as president in my third year. This role encompassed running the
                finances of the club, organizing training and racing events, and
                managing the other members of the committee. Over the year, we
                succeeded in replacing aging equipment, increasing the number of
                members, and improving the club's racing performance. This role
                pushed me to develop my leadership, organization, time, project,
                and team managment skills, all of which are transferable to a
                professional environment.
              </p>
            </Experience>
            <Experience
              title="Durham College Rowing Webmaster"
              subtitle="Trevelyan College Boat Club"
              date="2024 - 2025"
            >
              <p className="text-sm mx-2">
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
}

function App() {
  return (
    <>
      <div className="flex content-center w-full h-full bg-zinc-800">
        <div className="mx-auto my-auto shadow-lg rounded-lg inline-block">
          <CV />
        </div>
      </div>
    </>
  );
}

export default App;
