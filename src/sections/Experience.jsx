const experiences = [
  {
    period: "2024 — Present",
    role: "ULC Teaching Fellow and Grader",
    company: "Arizona State University",
    description:
      "Evaluated assignments, quizzes, and exams across multiple courses, providing actionable feedback to support 200+ students in data analysis, cloud, and IT concepts. Collaborated with instructors to ensure consistent grading standards and improve course content. Led hands-on cloud sessions for 50+ students, simplifying core concepts. Delivered AWS Cloud Practitioner training to enhance engagement and completion rates.",
    technologies: ["Data Analysis", "Cloud Computing", "Workflow Automation", "Learning Management Systems (Canvas, HubSpot)"],
    current: true,
  },
  {
    period: "2023 — 2024",
    role: "Junior AI Software Engineer",
    company: "Deepcept AI",
    description:
      "Pioneered advanced AI solutions for smart security surveillance, including intruder detection and custom object recognition, while also developing remote communication access within existing surveillance software to improve efficiency and accessibility. Additionally, engineered a robust pipeline for table tennis stroke recognition and analytics.",
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  {
    period: "2023 — 2023",
    role: "Software Engineer Intern",
    company: "Telestream",
    description:
      "Worked on backend development for the PRISM product, a real-time IP/SDI monitoring and analysis platform, implementing 20+ feature enhancements in audio and waveform applications and resolving 90+ bugs to meet product goals. Developed backend components using C++ and improved user experience by fixing UI issues with JavaScript, while following Agile methodology and SDLC practices throughout the development process.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    period: "2022 — 2023",
    role: "Hybrid Tester of Smart Solution Systems",
    company: "Bosch Ltd ",
    description:
      "Led rigorous quality assurance efforts for key smart subsystems contributing to Bosch’s smart campus initiative, making critical contributions across 5 of 14 subsystems. Conducted 300+ User Acceptance Tests (UAT) to ensure seamless functionality and user satisfaction, while driving an 80% reduction in system downtime to enhance overall efficiency and reliability.",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span>Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>
          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A journey of my growth as an engineer—from building foundational skills to developing real-world systems and AI-driven applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div className={'glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500'}>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4 text-justify">{exp.description}</p>
                    <div className={'flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}'}>
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className=" px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
