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
    <section id={id} className="scroll-mt-24 py-4">
      <article
        className="
          group
          rounded-sm p-6
          bg-transparent shadow-none
          transition-colors transition-shadow duration-300
          hover:bg-slate-800/60 hover:shadow-lg
        "
      >
        <h2
          className="
            text-xl font-semibold text-white 
            transition-colors
            group-hover:text-emerald-300
          "
        >
          {title}
        </h2>
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
    <section id={id} className="scroll-mt-24 py-4">
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-60">
      {/* LEFT: sticky hero + nav */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* For small screens, show hero on top */}
      <div className="lg:hidden pt-10">
        <h1 className="text-3xl font-bold">Ryan Wilkins</h1>
        <p className="mt-2">
          Designing and developing digital experiences that are intuitive,
          accessible, and built to last.
        </p>
      </div>

      {/* RIGHT: scrollable content */}
      <div className="pt-10 lg:pt-20">
        <SimpleSection id="about">
          <div className="space-y-6 leading-relaxed max-w-3xl">
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
            <li>
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-medium text-white">
                  Freelance Software Engineer
                </span>
                <span className="text-sm">2021 — Present</span>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>
                  Built and shipped responsive, accessible web applications
                  using semantic HTML, modern CSS (Flexbox, Grid, animations),
                  and Tailwind CSS for scalable, utility-first styling.
                </li>
                <li>
                  Developed production-level applications with
                  JavaScript/TypeScript, React, and Next.js, optimizing
                  performance and SEO for complex projects.
                </li>
                <li>
                  Designed and implemented Node.js/Express backends, with REST &
                  GraphQL APIs, secure authentication (JWT, OAuth), and database
                  integrations (PostgreSQL, MongoDB).
                </li>
                <li>
                  Delivered CMS and e-commerce solutions using WordPress,
                  Shopify, and headless CMS platforms (Contentful, Strapi,
                  Sanity) for both SMB and enterprise clients.
                </li>
                <li>
                  Led initiatives to improve developer experience and
                  accessibility, including CI/CD pipelines, mentoring,
                  best-practice documentation, and company-wide accessibility
                  standards.
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "PostgreSQL",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
            {/* more <li>… */}
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-lg">Project One</h3>
              <p className="mt-2 text-sm text-slate-300">
                Brief description and outcome.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg">Project Two</h3>
              <p className="mt-2 text-sm text-slate-300">Another highlight.</p>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            I’m open to freelance work and collaborations.{" "}
            <a
              className="text-emerald-400 underline hover:opacity-80"
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
