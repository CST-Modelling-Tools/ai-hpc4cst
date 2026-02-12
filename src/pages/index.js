import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

function Stat({value, label}) {
  return (
    <div className={styles.stat}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

function Card({title, description, href, tag}) {
  return (
    <Link className={styles.card} to={href}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>{title}</div>
        {tag ? <div className={styles.badge}>{tag}</div> : null}
      </div>
      <div className={styles.cardDescription}>{description}</div>
      <div className={styles.cardCta}>Learn more →</div>
    </Link>
  );
}

function FundingStrip() {
  const logo = useBaseUrl('/img/funding/MICIU_AEI.jpg');

  return (
    <div className={styles.fundingStrip} role="note" aria-label="Funding acknowledgement">
      <div className={styles.fundingText}>
        <div className={styles.fundingKicker}>
          <Translate id="home.funding.kicker">Funded by</Translate>
        </div>
        <div className={styles.fundingLine}>
          <Translate id="home.funding.line">
            Grant ATR2024-155003 funded by MICIU/AEI/10.13039/501100011033.
          </Translate>
        </div>
      </div>

      <a
        className={styles.fundingLogoLink}
        href="https://www.aei.gob.es/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="MICIU and AEI"
      >
        <img className={styles.fundingLogo} src={logo} alt="MICIU and AEI" />
      </a>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="AI + HPC to accelerate simulation-driven optimization of CST solar tower systems"
    >
      <header className={styles.hero}>
        <div className={clsx('container', styles.heroInner)}>
          {/* Compliance: visible in first screen (no scroll) */}
          <FundingStrip />

          <div className={styles.heroLeft}>
            <div className={styles.kicker}>
              <Translate id="home.kicker">ATRAE research project</Translate>
            </div>

            {/* Official full project title (prominent) */}
            <p className={styles.officialTitle}>
              <Translate id="home.officialTitle">
                Towards disruptive innovation in advanced solar energy systems through artificial
                intelligence and high performance computing.
              </Translate>
            </p>

            <h1 className={styles.heroTitle}>
              <Translate id="home.heroTitle">
                Transforming solar tower system design with AI and high-performance computing
              </Translate>
            </h1>

            <p className={styles.heroSubtitle}>
              <Translate id="home.heroSubtitle">
                AI-HPC4CST advances integral, multi-objective optimization of solar tower systems by combining artificial intelligence with high-performance computing.
              </Translate>
            </p>

            <div className={styles.heroActions}>
              <Link
                className={clsx('button button--primary', styles.primaryButton)}
                to="/docs/project/objectives"
              >
                <Translate id="home.cta.project">Project overview</Translate>
              </Link>

              <Link
                className={clsx('button button--secondary', styles.secondaryButton)}
                to="/docs/research/overview"
              >
                <Translate id="home.cta.research">Research</Translate>
              </Link>

              <Link
                className={clsx('button button--secondary', styles.secondaryButton)}
                to="/docs/results/publications"
              >
                <Translate id="home.cta.publications">Publications</Translate>
              </Link>
            </div>

            <div className={styles.statsRow}>
              <Stat value="AI" label="Surrogates & optimization" />
              <Stat value="HPC" label="Acceleration & scalability" />
              <Stat value="CST" label="Solar tower systems" />
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroPanel}>
              <div className={styles.panelTitle}>
                <Translate id="home.panel.title">For CST practitioners & decision makers</Translate>
              </div>
              <ul className={styles.panelList}>
                <li>
                  <Translate id="home.panel.b1">Clear objectives, work plan, and timeline</Translate>
                </li>
                <li>
                  <Translate id="home.panel.b2">Open tools and reproducible workflows</Translate>
                </li>
                <li>
                  <Translate id="home.panel.b3">Results, publications, and public deliverables</Translate>
                </li>
              </ul>
              <div className={styles.panelFooter}>
                <Link to="/docs/project/objectives">
                  <Translate id="home.panel.link">Start here →</Translate>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={clsx('container', styles.section)}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why it matters</h2>
            <p className={styles.sectionSubtitle}>
              CST optimization is high-dimensional and multi-objective, with expensive coupled simulations.
              AI-HPC4CST targets faster iteration, better designs, and transparent reproducibility.
            </p>
          </div>

          <div className={styles.grid3}>
            <Card
              title="Project"
              description="Objectives, work packages, timeline, and funding context."
              href="/docs/project/objectives"
              tag="Overview"
            />
            <Card
              title="Research"
              description="Multi-objective optimization, AI surrogates, and HPC workflows."
              href="/docs/research/overview"
              tag="Methods"
            />
            <Card
              title="Open tools"
              description="Tool ecosystem with dedicated blogs and repositories (Tonatiuh++ and more)."
              href="/docs/tools/overview"
              tag="Ecosystem"
            />
          </div>
        </section>

        <section className={styles.band}>
          <div className={clsx('container', styles.section)}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Tools ecosystem</h2>
              <p className={styles.sectionSubtitle}>
                The main site provides project context. Each tool has its own blog and documentation hub.
              </p>
            </div>

            <div className={styles.grid2}>
              <a
                className={styles.toolCard}
                href="https://cst-modelling-tools.github.io/tonatiuhpp-blog/"
              >
                <div className={styles.toolName}>Tonatiuh++</div>
                <div className={styles.toolDesc}>CST ray-tracing & modelling toolkit blog</div>
                <div className={styles.toolCta}>Open blog →</div>
              </a>

              <div className={styles.toolCardMuted}>
                <div className={styles.toolName}>Upcoming tools</div>
                <div className={styles.toolDesc}>
                  New project tools will be published as separate blogs here.
                </div>
                <div className={styles.toolCtaMuted}>Coming soon</div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx('container', styles.section)}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Results & dissemination</h2>
            <p className={styles.sectionSubtitle}>
              Publications, software releases, and events will be collected and updated throughout the project.
            </p>
          </div>

          <div className={styles.grid3}>
            <Card
              title="Publications"
              description="Papers and preprints with stable references."
              href="/docs/results/publications"
            />
            <Card
              title="Software"
              description="Releases, repositories, and reproducibility notes."
              href="/docs/results/software"
            />
            <Card
              title="Contact"
              description="Get in touch for collaboration, dissemination, or policy briefings."
              href="/docs/contact"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}