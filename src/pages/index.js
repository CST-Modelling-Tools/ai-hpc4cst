import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
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
      <div className={styles.cardCta}>
        <Translate id="home.card.cta">Learn more →</Translate>
      </div>
    </Link>
  );
}

function FundingStrip() {
  const logo = useBaseUrl('/img/funding/MICIU_AEI.jpg');

  const ariaFunding = translate({
    id: 'home.funding.aria',
    message: 'Funding acknowledgement',
  });

  const ariaLogo = translate({
    id: 'home.funding.logoAria',
    message: 'MICIU and AEI (opens in a new tab)',
  });

  const altLogo = translate({
    id: 'home.funding.logoAlt',
    message: 'MICIU and AEI',
  });

  return (
    <div className={styles.fundingStrip} role="note" aria-label={ariaFunding}>
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
        aria-label={ariaLogo}>
        <img className={styles.fundingLogo} src={logo} alt={altLogo} />
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

  const heroAlt = translate({
    id: 'home.heroPhoto.alt',
    message: 'CIEMAT-PSA solar tower systems',
  });

  return (
    <div className={styles.heroPhotoCard}>
      {/* Base image */}
      <img
        src={baseSrc}
        alt={heroAlt}
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
        <div className={styles.heroPhotoTitle}>
          <Translate id="home.heroPhoto.title">CIEMAT – PSA</Translate>
        </div>
        <div className={styles.heroPhotoSubtitle}>
          <Translate id="home.heroPhoto.subtitle">Solar tower systems</Translate>
        </div>
        <div className={styles.heroPhotoLinkRow}>
          <Link to="/docs/project/objectives" className={styles.heroPhotoLink}>
            <Translate id="home.heroPhoto.link">View project overview →</Translate>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  const layoutDescription = translate({
    id: 'home.meta.description',
    message: 'AI and HPC to enable integral, multi-objective optimisation of solar tower systems',
  });

  const heroAria = translate({
    id: 'home.hero.aria',
    message: 'Project overview hero',
  });

  const primaryActionsAria = translate({
    id: 'home.hero.actions.aria',
    message: 'Primary actions',
  });

  const statsAria = translate({
    id: 'home.stats.aria',
    message: 'Project pillars',
  });

  const heroImageAria = translate({
    id: 'home.hero.image.aria',
    message: 'Hero image',
  });

  return (
    <Layout title={siteConfig.title} description={layoutDescription}>
      <header className={styles.hero} aria-label={heroAria}>
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
                Advanced High-Dimensional Metaheuristic Optimisation for Solar Tower and Other Energy Systems
              </Translate>
            </h1>

            <p className={styles.heroSubtitle}>
              <Translate id="home.heroSubtitle">
                AI-HPC4CST develops advanced metaheuristic optimisation algorithms and scalable HPC workflows to
                enable the fast exploration and optimisation of high-dimensional engineering systems. Solar tower
                technology provides a high-impact demonstrator of this simulation-driven black-box framework.
              </Translate>
            </p>

            <nav className={styles.heroActions} aria-label={primaryActionsAria}>
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

            <div className={styles.statsRow} aria-label={statsAria}>
              <Stat value="AI" label={translate({id: 'home.stats.ai', message: 'Advanced metaheuristic optimisation'})} />
              <Stat value="HPC" label={translate({id: 'home.stats.hpc', message: 'Scalable high-performance simulation'})} />
              <Stat value="CST" label={translate({id: 'home.stats.cst', message: 'Solar tower demonstrator'})} />
            </div>
          </div>

          <aside className={styles.heroRight} aria-label={heroImageAria}>
            <HeroPhotoCard />
          </aside>
        </div>
      </header>

      <main className={styles.main}>
        <section className={clsx('container', styles.section)} aria-labelledby="why-title">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="why-title">
              <Translate id="home.why.title">Why it matters</Translate>
            </h2>
            <p className={styles.sectionSubtitle}>
              <Translate id="home.why.subtitle">
                Solar tower optimisation involves high-dimensional, strongly coupled design spaces evaluated through
                computationally expensive simulations. AI-HPC4CST advances scalable metaheuristic strategies to enable
                systematic exploration, faster design cycles, and reproducible optimisation workflows.
              </Translate>
            </p>
          </div>

          <div className={styles.grid3}>
            <Card
              title={<Translate id="home.cards.project.title">Project</Translate>}
              description={<Translate id="home.cards.project.desc">Objectives, work packages, timeline, and funding context.</Translate>}
              href="/docs/project/objectives"
              tag={<Translate id="home.cards.project.tag">Overview</Translate>}
            />
            <Card
              title={<Translate id="home.cards.research.title">Research</Translate>}
              description={
                <Translate id="home.cards.research.desc">
                  Advanced metaheuristic optimisation, high-dimensional design spaces, and scalable HPC workflows.
                </Translate>
              }
              href="/docs/research/overview"
              tag={<Translate id="home.cards.research.tag">Methods</Translate>}
            />
            <Card
              title={<Translate id="home.cards.tools.title">Open tools</Translate>}
              description={
                <Translate id="home.cards.tools.desc">
                  Open-source simulation and optimisation tools, repositories, and technical resources.
                </Translate>
              }
              href="/docs/tools/overview"
              tag={<Translate id="home.cards.tools.tag">Ecosystem</Translate>}
            />
          </div>
        </section>

        <section className={styles.band} aria-labelledby="tools-title">
          <div className={clsx('container', styles.section)}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} id="tools-title">
                <Translate id="home.tools.title">Tools ecosystem</Translate>
              </h2>
              <p className={styles.sectionSubtitle}>
                <Translate id="home.tools.subtitle">
                  The main site provides project context. Each tool has its own blog and documentation hub.
                </Translate>
              </p>
            </div>

            <div className={styles.grid2}>
              <a
                className={styles.toolCard}
                href="https://cst-modelling-tools.github.io/tonatiuhpp-blog/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translate({
                  id: 'home.tools.tonatiuh.aria',
                  message: 'Tonatiuh++ Development Blog (opens in a new tab)',
                })}>
                <div className={styles.toolName}>Tonatiuh++</div>
                <div className={styles.toolDesc}>
                  <Translate id="home.tools.tonatiuh.desc">CST ray-tracing &amp; modelling toolkit blog</Translate>
                </div>
                <div className={styles.toolCta}>
                  <Translate id="home.tools.tonatiuh.cta">Open blog →</Translate>
                </div>
              </a>

              <div
                className={styles.toolCardMuted}
                aria-label={translate({id: 'home.tools.upcoming.aria', message: 'Upcoming tools (coming soon)'})}>
                <div className={styles.toolName}>
                  <Translate id="home.tools.upcoming.title">Upcoming tools</Translate>
                </div>
                <div className={styles.toolDesc}>
                  <Translate id="home.tools.upcoming.desc">New project tools will be published as separate blogs here.</Translate>
                </div>
                <div className={styles.toolCtaMuted}>
                  <Translate id="home.tools.upcoming.cta">Coming soon</Translate>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx('container', styles.section)} aria-labelledby="results-title">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="results-title">
              <Translate id="home.results.title">Results & dissemination</Translate>
            </h2>
            <p className={styles.sectionSubtitle}>
              <Translate id="home.results.subtitle">
                Publications, software releases, and events will be collected and updated throughout the project.
              </Translate>
            </p>
          </div>

          <div className={styles.grid3}>
            <Card
              title={<Translate id="home.results.cards.pubs.title">Publications</Translate>}
              description={<Translate id="home.results.cards.pubs.desc">Papers and preprints with stable references.</Translate>}
              href="/docs/results/publications"
            />
            <Card
              title={<Translate id="home.results.cards.software.title">Software</Translate>}
              description={<Translate id="home.results.cards.software.desc">Releases, repositories, and reproducibility notes.</Translate>}
              href="/docs/results/software"
            />
            <Card
              title={<Translate id="home.results.cards.contact.title">Contact</Translate>}
              description={<Translate id="home.results.cards.contact.desc">Get in touch for collaboration, dissemination, or policy briefings.</Translate>}
              href="/docs/contact"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}