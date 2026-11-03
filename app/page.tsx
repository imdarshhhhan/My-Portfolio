"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";
import { highlights, personalInfo, projects, stats } from "./data";

type Tab = "skills" | "education" | "achievements";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.82a9.4 9.4 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M5.3 7.7A2.3 2.3 0 1 0 5.3 3a2.3 2.3 0 0 0 0 4.6ZM3.4 21h3.8V9H3.4v12Zm6.2 0h3.8v-6.7c0-1.8 3.5-2 3.5 0V21h3.8v-7.5c0-4.4-5-4.2-7.3-2.1V9H9.6v12Z" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path fill="currentColor" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
    </svg>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("skills");
  const visibleStats = stats.filter((stat) => stat.label !== "Years of Experience");

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name")}`);
    const body = encodeURIComponent(`${form.get("message")}\n\nFrom: ${form.get("name")} <${form.get("email")}>`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main navigation">
          <a className={styles.logo} href="#home">{personalInfo.name}</a>
          <div className={styles.navLinks}>
            <a href="#projects">Projects</a>
            <a href="#highlights">Highlights</a>
            <a href="#contact" className={styles.contactButton}>Hire me</a>
          </div>
        </nav>
      </header>

      <main>
        <section className={styles.hero} id="home">
          <div className={styles.heroInner}>
            <div>
              <span className={styles.eyebrow}>{personalInfo.role}</span>
              <h1>Hello, I am<br /><span className={styles.gradientName}>{personalInfo.name}</span></h1>
              <p className={styles.tagline}>{personalInfo.tagline}</p>
              <div className={styles.actions}>
                <a className={styles.primaryButton} href="#projects">View work <span aria-hidden="true">↘</span></a>
                {personalInfo.resumeUrl && (
                  <a
                    className={styles.secondaryButton}
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View my resume
                  </a>
                )}
              </div>
              <div className={styles.socials} aria-label="Social links">
                <a className={styles.social} href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
                <a className={styles.social} href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
                <a className={styles.social} href={personalInfo.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><LeetCodeIcon /></a>
                <a className={styles.social} href={`mailto:${personalInfo.email}`} aria-label="Email"><EmailIcon /></a>
                <a className={styles.social} href={personalInfo.phoneHref} aria-label={`Phone ${personalInfo.phone}`}><PhoneIcon /></a>
              </div>
            </div>
            <div className={styles.portraitWrap}>
              <div className={styles.portrait} role="img" aria-label={`Portrait placeholder for ${personalInfo.name}`}>
                {personalInfo.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className={styles.profileImage} src={personalInfo.imageUrl} alt={personalInfo.name} />
                ) : (
                  <span className={styles.initials}>{personalInfo.initials}</span>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.stats} aria-label="Portfolio statistics">
          <div className={styles.statsInner}>
            {visibleStats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} id="projects">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.sectionLabel}>Selected work</span>
                <h2 className={styles.sectionTitle}>Projects</h2>
              </div>
            </div>
            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <article className={styles.projectCard} key={project.number}>
                  <span className={styles.projectNumber}>{project.number}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.stack}>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className={styles.projectLinks}>
                    {project.live && <a className={styles.smallLink} href={project.live} target="_blank" rel="noreferrer">Live ↗</a>}
                    {project.github && <a className={styles.smallLink} href={project.github} target="_blank" rel="noreferrer">Source code</a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionDark}`} id="highlights">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.sectionLabel}>About me</span>
                <h2 className={styles.sectionTitle}>Highlights</h2>
              </div>
            </div>
            <div className={styles.tabsLayout}>
              <div className={styles.tabs} role="tablist" aria-label="Portfolio highlights">
                {(["skills", "education", "achievements"] as Tab[]).map((tab) => (
                  <button
                    className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab[0].toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div className={styles.contentPanel}>
                {activeTab === "skills" && (
                  <div className={styles.skillGrid}>{highlights.skills.map((skill) => <div className={styles.skill} key={skill}>{skill}</div>)}</div>
                )}
                {activeTab === "education" && (
                  <div className={styles.educationGrid}>{highlights.education.map((item) => (
                    <article className={styles.infoCard} key={item.institution}>
                      <h3>{item.institution}</h3><p>{item.qualification}</p><p>{item.duration}</p>
                    </article>
                  ))}</div>
                )}
                {activeTab === "achievements" && (
                  <div className={styles.achievementGrid}>{highlights.achievements.map((item) => (
                    <article className={styles.infoCard} key={item.title}>
                      <h3>{item.title}</h3><p>{item.description}</p>
                    </article>
                  ))}</div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="contact">
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.sectionLabel}>Get in touch</span>
              <h2 className={styles.sectionTitle}>Let&apos;s work together.</h2>
              <p>I am open to projects, collaborations, and new opportunities.</p>
              <p><strong>Email</strong><br />{personalInfo.email}</p>
              <p><strong>Phone</strong><br /><a href={personalInfo.phoneHref}>{personalInfo.phone}</a></p>
              <p><strong>Location</strong><br />{personalInfo.location}</p>
            </div>
            <form className={styles.contactForm} onSubmit={submitContact}>
              <input name="name" type="text" placeholder="Your name" required />
              <input name="email" type="email" placeholder="Your email" required />
              <textarea name="message" placeholder="Type your message here" required />
              <button className={styles.primaryButton} type="submit">Send message</button>
            </form>
          </div>
        </section>
      </main>
      <footer className={`${styles.footer} ${styles.sectionDark}`}>© {new Date().getFullYear()} {personalInfo.name}. Built with Next.js.</footer>
    </div>
  );
}
