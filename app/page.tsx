// app/page.tsx
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-12">
      <article
        className="
          group rounded-md p-4 sm:p-6
          bg-transparent shadow-none
          motion-safe:transition transition-colors transition-shadow duration-300
          hover:bg-slate-800/60 hover:shadow-lg
          ml-35
        "
      >
        {id !== "experience" && (
          <h2
            className="
              text-xl sm:text-2xl font-semibold text-white
              motion-safe:transition transition-colors
              supports-[hover]:group-hover:text-emerald-300
            "
          >
            {title}
          </h2>
        )}
        <div className="mt-4">{children}</div>
      </article>
    </section>
  );
}

function SimpleSection({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 sm:scroll-mt-24 py-6 sm:py-8">
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20">
      {/* Mobile top nav */}
      <Header />

      {/* LEFT: sticky hero + nav (desktop only) */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* RIGHT: content */}
      <div className="pt-20 lg:pt-20">
        {/* Mobile hero */}
        <div className="lg:hidden pt-2">
          <h1 className="text-[clamp(1.5rem,6vw,2rem)] font-bold leading-tight text-slate-100">
            Ryan Wilkins
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-prose">
            Designing and developing digital experiences that are intuitive,
            accessible, and built to last.
          </p>
        </div>

        <SimpleSection id="about">
          <div className="space-y-5 sm:space-y-6 leading-relaxed max-w-prose text-base mt-2 ml-35">
            <p>
              For the past five years, I’ve worked independently to design,
              build, and ship high-quality digital products across web, mobile,
              and cross-platform environments. I specialize in creating
              accessible, responsive interfaces with semantic HTML, modern CSS
              (Flexbox, Grid, animations), and JavaScript/TypeScript, while
              leveraging frameworks like React, Next.js, and Tailwind CSS to
              deliver fast, scalable user experiences.
            </p>
            <p>
              On the backend, I’ve architected and implemented Node.js and
              Express applications, designed REST and GraphQL APIs, and
              integrated secure authentication with JWT and OAuth. My projects
              often involve PostgreSQL and MongoDB for data management, as well
              as CMS and e-commerce platforms including WordPress, Shopify,
              Contentful, Strapi, and Sanity, enabling me to deliver flexible
              solutions for both small businesses and enterprise clients.
            </p>
            <p>
              Beyond technical execution, I’ve led initiatives to improve
              developer experience, mentoring other engineers, building CI
              pipelines, and creating internal tools that accelerate delivery.
              I’ve also spearheaded company-wide accessibility efforts,
              developing best-practice documentation, standard checklists, and
              knowledge-sharing sessions to ensure inclusive, future-proof
              digital experiences.
            </p>
          </div>
        </SimpleSection>

        <Section id="experience" title="Experience">
          <ul className="space-y-6">
            <li className="group">
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-6">
                {/* Left column: Date */}
                <div className="text-sm text-slate-400 sm:text-right">
                  2021 — Present
                </div>
                {/* Right column: Title, description, tags */}
                <div>
                  <span className="font-medium text-white transition-colors duration-200 group-hover:text-emerald-300 bg-transparent block mb-2">
                    Freelance Software Engineer
                  </span>
                  <p className="mt-2 mb-3 text-sm">
                    I built and shipped responsive, accessible web applications
                    using semantic HTML, modern CSS (Flexbox, Grid, animations),
                    and Tailwind CSS, while developing production-ready
                    applications with JavaScript/TypeScript, React, and Next.js.
                    I also designed and implemented Node.js/Express backends
                    with REST and GraphQL APIs, including JWT/OAuth
                    authentication. My experience extends to delivering CMS and
                    e-commerce solutions with WordPress, Shopify, and headless
                    CMS platforms such as Contentful, Strapi, and Sanity.
                    Additionally, I led developer experience and accessibility
                    initiatives, including CI/CD pipelines, mentoring, and
                    establishing best practices.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "Tailwind CSS",
                      "HTML",
                      "React",
                      "Next.js",
                      "Node.js",
                      "PostgreSQL",
                      "Docker",
                      "Prisma",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded text-emerald-300 bg-emerald-400/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Section>
        <Section id="resume" title="Resume">
          <a
            className="inline-flex min-h-[44px] items-center text-emerald-400 underline focus:outline-none focus:ring-2 focus:ring-emerald-500/60 rounded-sm supports-[hover]:hover:opacity-80"
            href="mailto:ryanwilkins.dev@gmail.com"
          >
            ryanwilkins.dev@gmail.com
          </a>
        </Section>
        <Section id="projects" title="Projects">
          <div className="space-y-6 sm:space-y-8 max-w-prose ml-35">
            <div>
              <h3 className="font-medium text-[clamp(1rem,2.5vw,1.125rem)] text-slate-100">
                Project One
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300">
                Brief description and outcome.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-[clamp(1rem,2.5vw,1.125rem)] text-slate-100">
                Project Two
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300">
                Another highlight.
              </p>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-base sm:text-lg">
            I’m open to freelance work and collaborations.{" "}
            <a
              className="inline-flex min-h-[44px] items-center text-emerald-400 underline focus:outline-none focus:ring-2 focus:ring-emerald-500/60 rounded-sm supports-[hover]:hover:opacity-80"
              href="mailto:ryanwilkins.dev@gmail.com"
            >
              ryanwilkins.dev@gmail.com
            </a>
          </p>
        </Section>
      </div>
    </main>
  );
}
