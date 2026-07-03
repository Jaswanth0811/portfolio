import { Section } from "./Section";

const INTERNSHIPS = [
  {
    company: "Tech Mahindra Foundation (BCT-TMF)",
    role: "Mechanical Technical Training",
    period: "6 Months",
    status: "Completed",
    description: [
      "Gained exposure to industrial processes and mechanical systems",
      "Observed machine operations and workflow",
      "Learned maintenance practices and safety procedures",
      "Understood practical applications of mechanical engineering concepts"
    ]
  },
];

export function Internships() {
  return (
    <Section id="internships">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Internships & Training
        </h2>

        <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12 pb-4">
          {INTERNSHIPS.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2 top-2 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center">
              </div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {item.company}
                  </h3>
                  {item.status && (
                    <span className="text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                      {item.status}
                    </span>
                  )}
                </div>
                <span className="text-sm md:text-base text-accent font-medium mt-1 md:mt-0">
                  {item.period}
                </span>
              </div>
              
              <p className="text-muted text-base md:text-lg mb-4">
                {item.role}
              </p>

              {item.description && (
                <ul className="list-disc list-inside space-y-2 text-muted/80 text-sm md:text-base pl-2">
                  {item.description.map((bullet, bIndex) => (
                    <li key={bIndex} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
