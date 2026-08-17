import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Troy Sawyer — Software Developer & Systems Thinker",
  description:
    "Troy Sawyer builds practical, dependable software for complex information and workflows.",
};

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="monogram" href="#top" aria-label="Troy Sawyer, home">
            TS
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#acreage">Acreage</a>
            <a className="nav-contact" href="#contact">
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>

        <div className="hero-copy" id="top">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Software architect · Saskatchewan
          </p>
          <h1 id="hero-title">
            <span>Troy</span>
            <span className="outline-word">Sawyer</span>
          </h1>
          <div className="hero-intro">
            <p>
              I build practical, dependable software that brings structure to
              complex information and workflows.
            </p>
            <a className="circle-link" href="#about" aria-label="Learn more about Troy">
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span>Scroll to explore</span>
        </div>
      </section>

      <section className="about-section dark-section" id="about" aria-labelledby="about-title">
        <div className="section-rail">
          <span>02</span>
          <span>About</span>
        </div>
        <div className="section-body" id="main-content">
          <p className="kicker">The short version</p>
          <h2 id="about-title">
            Good systems make <em>complex work</em> feel simple.
          </h2>
          <div className="about-grid">
            <p className="lead-copy">
              I&apos;m Troy, a partner and lead developer at Western Information
              Management. I work where software, information, and real-world
              operations meet.
            </p>
            <div className="body-copy">
              <p>
                As Director of Development, Senior Developer, and Systems
                Analyst, I turn complicated requirements into clear, useful
                tools. My work spans application architecture, systems analysis,
                data, integration, and information management.
              </p>
              <p>
                For more than two decades, I&apos;ve helped public- and private-sector
                organizations build and connect systems that people can depend on.
              </p>
            </div>
          </div>
          <dl className="stat-row">
            <div>
              <dt>20+</dt>
              <dd>Years building software</dd>
            </div>
            <div>
              <dt>02</dt>
              <dd>Products led</dd>
            </div>
            <div>
              <dt>01</dt>
              <dd>Goal: useful systems</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-rail">
          <span>03</span>
          <span>Selected work</span>
        </div>
        <div className="section-body">
          <p className="kicker">What I build</p>
          <div className="section-heading-row">
            <h2 id="work-title">Products, platforms, and the connections between them.</h2>
            <p>
              From product architecture to the last-mile integration, I stay
              close to both the system and the people it serves.
            </p>
          </div>

          <div className="project-list">
            <article className="project-card">
              <div className="project-number">01</div>
              <div>
                <p className="project-type">Information management platform</p>
                <h3>AgileIM</h3>
                <p>
                  Architect and lead developer for a flexible application that
                  helps organizations inventory and maintain physical and electronic
                  records for analysis, classification, reorganization, and migration.
                </p>
              </div>
              <a
                className="project-link"
                href="https://westernim.com/agileim/"
                target="_blank"
                rel="noreferrer"
                aria-label="Learn about AgileIM on Western Information Management"
              >
                ↗
              </a>
            </article>

            <article className="project-card">
              <div className="project-number">02</div>
              <div>
                <p className="project-type">Email and records integration</p>
                <h3>EmailPointer</h3>
                <p>
                  Architect and lead developer for an Outlook add-in that makes it
                  easier to file, find, link, and send emails, attachments, and
                  documents without leaving Outlook.
                </p>
              </div>
              <a
                className="project-link"
                href="https://emailpointer.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Learn about EmailPointer on Western Information Management"
              >
                ↗
              </a>
            </article>

            <article className="project-card">
              <div className="project-number">03</div>
              <div>
                <p className="project-type">Custom systems</p>
                <h3>Development &amp; integration</h3>
                <p>
                  Purpose-built applications, data flows, and integrations that
                  make existing technology work better together.
                </p>
              </div>
              <a
                className="project-link"
                href="https://westernim.com/services/"
                target="_blank"
                rel="noreferrer"
                aria-label="Explore services at Western Information Management"
              >
                ↗
              </a>
            </article>
          </div>
        </div>
      </section>

      <section
        className="earlier-section dark-section"
        id="earlier"
        aria-labelledby="earlier-title"
      >
        <div className="section-rail">
          <span>04</span>
          <span>Earlier chapters</span>
        </div>
        <div className="section-body">
          <p className="kicker">The road here</p>
          <h2 id="earlier-title">
            Earlier chapters, <em>lasting lessons.</em>
          </h2>
          <p className="earlier-intro">
            My route into software wasn&apos;t a straight line. It ran through a
            student business, industrial systems, a classroom in Jakarta,
            community service, and competitive sport.
          </p>

          <ol className="chapter-list">
            <li>
              <span className="chapter-number" aria-hidden="true">
                01
              </span>
              <div>
                <p className="chapter-label">Builder from the start</p>
                <h3>Small business to industrial systems</h3>
              </div>
              <p>
                I started and ran Accolade Computers while I was still in
                school—designing websites, software, database tools, and
                complete PCs. I later built web applications for education,
                research, and commercial clients, then worked on industrial
                data-acquisition systems and international deployments.
              </p>
            </li>
            <li>
              <span className="chapter-number" aria-hidden="true">
                02
              </span>
              <div>
                <p className="chapter-label">Beyond technology</p>
                <h3>Teaching and community</h3>
              </div>
              <p>
                I taught Language Arts to students in Jakarta, served as
                president of a community softball association, and volunteered
                as a camper companion and sign-language interpreter at a camp
                for children with cancer.
              </p>
            </li>
            <li>
              <span className="chapter-number" aria-hidden="true">
                03
              </span>
              <div>
                <p className="chapter-label">Education &amp; athletics</p>
                <h3>Physics, computing, and competition</h3>
              </div>
              <p>
                I earned a BSc in Physics and Computer Science at Trent
                University and competed in varsity fencing. Before that came an
                Ontario pole-vault bronze medal and a county-championship season
                as a starting quarterback and team captain.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section
        className="acreage-section"
        id="acreage"
        aria-labelledby="acreage-title"
      >
        <div className="section-rail">
          <span>05</span>
          <span>At the acreage</span>
        </div>
        <div className="section-body">
          <p className="kicker">Life beyond software</p>
          <div className="acreage-heading-row">
            <h2 id="acreage-title">
              Good systems get <em>dirt under their nails.</em>
            </h2>
            <p>
              Outside work, I&apos;m building a different kind of system at our
              Saskatchewan acreage—one shaped by seasons, living things, and a
              lot of hands-on learning.
            </p>
          </div>

          <div className="acreage-feature">
            <div className="acreage-metric">
              <span className="metric-value">12,000</span>
              <span className="metric-unit">square feet</span>
              <p>
                A commercial greenhouse being developed for hydroponic growing.
              </p>
            </div>
            <ol className="acreage-projects">
              <li>
                <span aria-hidden="true">01</span>
                <div>
                  <h3>Old coop, new life</h3>
                  <p>
                    Bringing an old chicken coop back into use instead of
                    starting over.
                  </p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">02</span>
                <div>
                  <h3>A growing flock</h3>
                  <p>
                    Adding hens and chicks, and learning the daily rhythms of
                    caring for them well.
                  </p>
                </div>
              </li>
              <li>
                <span aria-hidden="true">03</span>
                <div>
                  <h3>Hydroponic future</h3>
                  <p>
                    Restoring the greenhouse and developing the systems needed
                    to grow food productively indoors.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <p className="acreage-close">
            The setting is different from software, but the appeal is familiar:
            understand the moving parts, learn from what the system is telling
            you, and make it dependable.
          </p>
        </div>
      </section>

      <section className="principles-section" aria-labelledby="principles-title">
        <div className="section-rail">
          <span>06</span>
          <span>How I work</span>
        </div>
        <div className="section-body">
          <p className="kicker">Working principles</p>
          <h2 id="principles-title">Clear thinking. Useful outcomes.</h2>
          <div className="principles-grid">
            <article>
              <span>01</span>
              <h3>Make complexity legible</h3>
              <p>
                Understand the real problem, name the moving parts, and design a
                system people can reason about.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Build for the people using it</h3>
              <p>
                A technically elegant system only matters when it makes someone&apos;s
                work clearer, faster, or more reliable.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Choose durable over flashy</h3>
              <p>
                Favour understandable architecture, sensible trade-offs, and
                software that remains useful after launch day.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section dark-section" id="contact" aria-labelledby="contact-title">
        <div className="section-rail">
          <span>07</span>
          <span>Contact</span>
        </div>
        <div className="section-body">
          <p className="kicker">Start a conversation</p>
          <h2 id="contact-title">
            Have a knotty problem? <em>Let&apos;s make it simpler.</em>
          </h2>
          <div className="contact-row">
            <a className="email-link" href="mailto:troy.sawyer@westernim.ca">
              troy.sawyer@westernim.ca <span aria-hidden="true">↗</span>
            </a>
            <div className="social-links" aria-label="External profiles">
              <a
                href="https://ca.linkedin.com/in/troy-sawyer-0690b26a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://westernim.com/" target="_blank" rel="noreferrer">
                WesternIM
              </a>
              <a href="https://github.com/troysawyer" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <footer>
            <span>© 2026 Troy Sawyer</span>
            <a href="#top">Back to top ↑</a>
          </footer>
        </div>
      </section>
    </main>
  );
}
