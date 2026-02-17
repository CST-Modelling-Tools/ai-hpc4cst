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
    <Link className={styles.card} to={href} aria-label={`${title}: ${description}`}>
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
        aria-label="MICIU and AEI (opens in a new tab)">
        <img className={styles.fundingLogo} src={logo} alt="MICIU and AEI" />
      </a>
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(Boolean(media.matches));

    onChange();

    if (media.addEventListener) {
      media.addEventListener('change', onChange);
      return () => media.removeEventListener('change', onChange);
    }

    // Safari fallback
    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  return reduced;
}

/**
 * Cross-fade carousel:
 * - Two layers (base + incoming) with opacity transition.
 * - Preloads the next image before fading in.
 * - Respects prefers-reduced-motion (no rotation, no transitions).
 */
function HeroPhotoCard() {
  const img1 = useBaseUrl('/img/psa/psa-01.webp');
  const img2 = useBaseUrl('/img/psa/psa-02.webp');
  const img3 = useBaseUrl('/img/psa/psa-03.webp');
  const img4 = useBaseUrl('/img/psa/psa-04.webp');
  const img5 = useBaseUrl('/img/psa/psa-05.webp');

  const images = React.useMemo(() => [img1, img2, img3, img4, img5], [img1, img2, img3, img4, img5]);

  const prefersReducedMotion = usePrefersReducedMotion();

  const FADE_MS = 650;
  const ROTATE_MS = 5000;

  const [baseIndex, setBaseIndex] = React.useState(0);
  const [incomingIndex, setIncomingIndex] = React.useState(0);
  const [showIncoming, setShowIncoming] = React.useState(false);

  const intervalRef = React.useRef(null);
  const fadeTimeoutRef = React.useRef(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    // Safety cleanup
    const clearTimers = () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (fadeTimeoutRef.current) {
        window.clearTimeout(fadeTimeoutRef.current);
        fadeTimeoutRef.current = null;
      }
    };

    clearTimers();

    // No animation/rotation if reduced motion or insufficient images
    if (prefersReducedMotion || images.length < 2) {
      setBaseIndex(0);
      setIncomingIndex(0);
      setShowIncoming(false);
      return clearTimers;
    }

    intervalRef.current = window.setInterval(() => {
      const next = (baseIndex + 1) % images.length;

      // Preload next image before fading
      const preloader = new window.Image();
      preloader.src = images[next];

      preloader.onload = () => {
        setIncomingIndex(next);
        setShowIncoming(true);

        // After fade completes, promote incoming to base
        fadeTimeoutRef.current = window.setTimeout(() => {
          setBaseIndex(next);
          setShowIncoming(false);
        }, FADE_MS);
      };

      // If preload errors, just hard-swap safely (still no crash)
      preloader.onerror = () => {
        setBaseIndex(next);
        setIncomingIndex(next);
        setShowIncoming(false);
      };
    }, ROTATE_MS);

    return clearTimers;
    // We intentionally depend on baseIndex so the “next” calculation stays correct.
  }, [baseIndex, images, prefersReducedMotion]);

  const baseSrc = images[baseIndex] || images[0];
  const incomingSrc = images[incomingIndex] || images[0];

  return (
    <div className={styles.heroPhotoCard}>
      {/* Base image */}
      <img
        src={baseSrc}
        alt="CIEMAT-PSA solar tower systems"
        className={clsx(styles.heroPhoto, styles.heroPhotoBase)}
        draggable="false"
        loading="eager"
      />

      {/* Incoming image (cross-fade layer) */}
      {!prefersReducedMotion ? (
        <img
          src={incomingSrc}
          alt=""
          aria-hidden="true"
          className={clsx(
            styles.heroPhoto,
            styles.heroPhotoIncoming,
            showIncoming && styles.heroPhotoIncomingVisible
          )}
          draggable="false"
        />
      ) : null}

      <div className={styles.heroPhotoOverlay} />

      <div className={styles.heroPhotoCaption}>
        <div className={styles.heroPhotoTitle}>CIEMAT – PSA</div>
        <div className={styles.heroPhotoSubtitle}>Solar tower systems</div>
        <div className={styles.heroPhotoLinkRow}>
          <Link to="/docs/project/objectives" className={styles.heroPhotoLink}>
            View project overview →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="AI and HPC to enable integral, multi-objective optimisation of solar tower systems">
      <header className={styles.hero} aria-label="Project overview hero">
        <div className={clsx('container', styles.heroInner)}>
          <FundingStrip />

          <div className={styles.heroLeft}>
            <div className={styles.kicker}>
              <Translate id="home.kicker">ATRAE research project</Translate>
            </div>

            <p className={styles.officialTitle}>
              <Translate id="home.officialTitle">
                Towards disruptive innovation in advanced solar energy systems through artificial intelligence and
                high performance computing.
              </Translate>
            </p>

            <h1 className={styles.heroTitle}>
              <Translate id="home.heroTitle">
                Advanced Metaheuristic Optimisation for High-Dimensional Solar Tower and Other Energy Systems
              </Translate>
            </h1>

            <p className={styles.heroSubtitle}>
              <Translate id="home.heroSubtitle">
                AI-HPC4CST develops advanced metaheuristic optimisation algorithms and scalable HPC workflows to 
                enable the fast exploration and optimisation of high-dimensional engineering systems. Solar tower 
                technology provides a high-impact demonstrator of this simulation-driven black-box framework.
              </Translate>
            </p>

            <nav className={styles.heroActions} aria-label="Primary actions">
              <Link className={clsx('button button--primary', styles.primaryButton)} to="/docs/project/objectives">
                <Translate id="home.cta.project">Project overview</Translate>
              </Link>
              <Link className={clsx('button button--secondary', styles.secondaryButton)} to="/docs/research/overview">
                <Translate id="home.cta.research">Research</Translate>
              </Link>
              <Link className={clsx('button button--secondary', styles.secondaryButton)} to="/docs/results/publications">
                <Translate id="home.cta.publications">Publications</Translate>
              </Link>
            </nav>

            <div className={styles.statsRow} aria-label="Project pillars">
              <Stat value="AI" label="Advanced metaheuristic optimisation" />
              <Stat value="HPC" label="Scalable high-performance simulation" />
              <Stat value="CST" label="Solar tower demonstrator" />
            </div>
          </div>

          <aside className={styles.heroRight} aria-label="Hero image">
            <HeroPhotoCard />
          </aside>
        </div>
      </header>

      <main className={styles.main}>
        <section className={clsx('container', styles.section)} aria-labelledby="why-title">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="why-title">
              Why it matters
            </h2>
            <p className={styles.sectionSubtitle}>
              Solar tower optimisation involves high-dimensional, strongly coupled design spaces evaluated through
              computationally expensive simulations. AI-HPC4CST advances scalable metaheuristic strategies to enable
              systematic exploration, faster design cycles, and reproducible optimisation workflows.
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
              description="Advanced metaheuristic optimisation, high-dimensional design spaces, and scalable HPC workflows."
              href="/docs/research/overview"
              tag="Methods"
            />
            <Card
              title="Open tools"
              description="Open-source simulation and optimisation tools, repositories, and technical resources."
              href="/docs/tools/overview"
              tag="Ecosystem"
            />
          </div>
        </section>

        <section className={styles.band} aria-labelledby="tools-title">
          <div className={clsx('container', styles.section)}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} id="tools-title">
                Tools ecosystem
              </h2>
              <p className={styles.sectionSubtitle}>
                The main site provides project context. Each tool has its own blog and documentation hub.
              </p>
            </div>

            <div className={styles.grid2}>
              <a
                className={styles.toolCard}
                href="https://cst-modelling-tools.github.io/tonatiuhpp-blog/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tonatiuh++ Development Blog (opens in a new tab)">
                <div className={styles.toolName}>Tonatiuh++</div>
                <div className={styles.toolDesc}>CST ray-tracing & modelling toolkit blog</div>
                <div className={styles.toolCta}>Open blog →</div>
              </a>

              <div className={styles.toolCardMuted} aria-label="Upcoming tools (coming soon)">
                <div className={styles.toolName}>Upcoming tools</div>
                <div className={styles.toolDesc}>New project tools will be published as separate blogs here.</div>
                <div className={styles.toolCtaMuted}>Coming soon</div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx('container', styles.section)} aria-labelledby="results-title">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="results-title">
              Results & dissemination
            </h2>
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