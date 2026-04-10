import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">


          {/* left Column*/}
          <div className="space-y-6">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Hello, I'm Rachana Kumar. I am a Software Engineer and current Computer Engineering Master’s student at Arizona State University. I am passionate about bridging the gap between innovative algorithms and robust, production-ready backend systems.
              </p>
              <p>
                In my professional journey, I have cultivated a diverse technical foundation. As an AI Software Engineer at Deepcept AI, I pioneered smart security surveillance pipelines and custom object recognition. Previously, I optimized real-time monitoring platforms using C++ at Telestream, and championed critical Quality Assurance for smart campus infrastructure at Bosch.
              </p>
              <p>
                Most recently, I architected a highly scalable, event-driven ride-sharing backend (Mini-Uber). Leveraging Java, Spring Boot, Kafka, and Redis, this microservices ecosystem handles sub-millisecond driver matching and real-time telemetry. Whether I am tuning AI models or decoupling distributed systems, I thrive on building efficient architectures that solve complex real-world bottlenecks.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to architect intelligent, highly scalable systems that bridge the gap between advanced AI capabilities and resilient, event-driven infrastructure."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass rounded-2xl p-6 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
