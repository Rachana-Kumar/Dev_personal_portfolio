import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Mini-Uber Backend Ecosystem",
    description:
      "A scalable, event-driven microservices architecture replicating a ride-sharing platform with sub-millisecond geo-matching, WebSocket telemetry, and dynamic surge pricing.",
    image: "/projects/project1.svg", // Update with your actual image path
    tags: ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL"],
    //link: "#",
    github: "https://github.com/Rachana-Kumar/mini-uber-backend",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive, interactive portfolio website designed to showcase my software engineering projects, professional experience, and technical skill set.",
    image: "/projects/project2.svg", 
    tags: ["React", "TypeScript", "Tailwind CSS"], 
    //link: "#",
    github: "https://github.com/Rachana-Kumar/Dev_personal_portfolio",
  },
  {
    title: "Multipurpose Camouflage Robot",
    description:
      "A versatile robotics system employing an Embodied Semantic Perception model for adaptive concealment, real-time environment analysis, and strategic mobility.",
    image: "/projects/project3.svg", // Update with your actual image path
    tags: ["Raspberry Pi", "NodeMCU", "ESP8266", "GSM"],
    //link: "#",
    github: "https://github.com/Rachana-Kumar",
  },
  {
    title: "Automated Anaesthesia Loading Dock",
    description:
      "An innovative 3D-printed hydraulic loading dock designed for the precise, automated administration of local anaesthesia with a sub-5% error margin.",
    image: "/projects/project4.svg", // Update with your actual image path
    tags: ["Python", "MATLAB", "Hydraulics", "3D Printing"],
    //link: "#",
    github: "https://github.com/Rachana-Kumar",
  },
  {
    title: "Gym Exercise Tracker",
    description:
      "A computer vision application that tracks 20+ exercise variations, mobilizing real-time notifications and form-correction alarms to prevent overexertion.",
    image: "/projects/project5.svg", // Update with your actual image path
    tags: ["Python", "MediaPipe", "Computer Vision"],
    //link: "#",
    github: "https://github.com/Rachana-Kumar/Gym-excercise-tracker",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/*Image*/}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/*<a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>*/}
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/*Content*/}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground test-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
