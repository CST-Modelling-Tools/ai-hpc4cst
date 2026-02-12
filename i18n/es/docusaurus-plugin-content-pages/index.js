import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function Stat({ value, label }) {
  return (
    <div className={styles.stat}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

function Card({ title, description, href, tag }) {
  return (
    <Link className={styles.card} to={href}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>{title}</div>
        {tag ? <div className={styles.badge}>{tag}</div> : null}
      </div>
      <div className={styles.cardDescription}>{description}</div>
      <div className={styles.cardCta}>Ver más →</div>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="IA + HPC para la optimización de nueva generación en plantas de torre solar (CST)"
    >
      <header className={styles.hero}>
        <div className={clsx('container', styles.heroInner)}>
          <div className={styles.heroLeft}>
            <div className={styles.kicker}>Proyecto de investigación</div>
            <h1 className={styles.heroTitle}>
              IA + HPC para la optimización de nueva generación en sistemas CST de torre solar
            </h1>
            <p className={styles.heroSubtitle}>
              AI-HPC4CST impulsa la optimización integral —campo de helióstatos, receptor y restricciones de sistema—,
              acelerada mediante computación de alto rendimiento y compartida con enfoque de ciencia abierta.
            </p>

            <div className={styles.heroActions}>
              <Link className={clsx('button button--primary', styles.primaryButton)} to="/docs/research/overview">
                Explorar investigación
              </Link>
              <Link className={clsx('button button--secondary', styles.secondaryButton)} to="/docs/tools/overview">
                Explorar herramientas
              </Link>
              <Link className={clsx('button button--secondary', styles.secondaryButton)} to="/docs/results/publications">
                Publicaciones
              </Link>
            </div>

            <div className={styles.statsRow}>
              <Stat value="IA" label="Optimización y modelos" />
              <Stat value="HPC" label="Aceleración y escalado" />
              <Stat value="CST" label="Sistemas de torre" />
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroPanel}>
              <div className={styles.panelTitle}>Para comunidad CST y responsables públicos</div>
              <ul className={styles.panelList}>
                <li>Estructura del proyecto, objetivos y plan de trabajo</li>
                <li>Herramientas open-source y flujos reproducibles</li>
                <li>Resultados, publicaciones y entregables públicos</li>
              </ul>
              <div className={styles.panelFooter}>
                <Link to="/docs/project/objectives">Resumen del proyecto →</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={clsx('container', styles.section)}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Por qué importa</h2>
            <p className={styles.sectionSubtitle}>
              La optimización en CST es multiobjetivo, de alta dimensión y con simulaciones acopladas costosas.
              AI-HPC4CST busca iteraciones más rápidas, mejores diseños y reproducibilidad transparente.
            </p>
          </div>

          <div className={styles.grid3}>
            <Card
              title="Proyecto"
              description="Objetivos, paquetes de trabajo, cronograma y contexto de financiación."
              href="/docs/project/objectives"
              tag="Visión"
            />
            <Card
              title="Investigación"
              description="Métodos: optimización multiobjetivo, modelos sustitutos (IA) y flujos HPC."
              href="/docs/research/overview"
              tag="Métodos"
            />
            <Card
              title="Herramientas abiertas"
              description="Ecosistema de herramientas con blogs y repositorios (Tonatiuh++ y más)."
              href="/docs/tools/overview"
              tag="Ecosistema"
            />
          </div>
        </section>

        <section className={styles.band}>
          <div className={clsx('container', styles.section)}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Ecosistema de herramientas</h2>
              <p className={styles.sectionSubtitle}>
                Este sitio aporta el contexto del proyecto. Cada herramienta tiene su propio blog y hub de documentación.
              </p>
            </div>

            <div className={styles.grid2}>
              <a className={styles.toolCard} href="https://cst-modelling-tools.github.io/tonatiuhpp-blog/">
                <div className={styles.toolName}>Tonatiuh++</div>
                <div className={styles.toolDesc}>Blog de herramientas de trazado de rayos y modelado CST</div>
                <div className={styles.toolCta}>Abrir blog →</div>
              </a>

              <div className={styles.toolCardMuted}>
                <div className={styles.toolName}>Próximas herramientas</div>
                <div className={styles.toolDesc}>Publicaremos nuevas herramientas del proyecto como blogs independientes.</div>
                <div className={styles.toolCtaMuted}>Próximamente</div>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx('container', styles.section)}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Resultados y difusión</h2>
            <p className={styles.sectionSubtitle}>
              Publicaciones, versiones de software y eventos se actualizarán durante el proyecto.
            </p>
          </div>

          <div className={styles.grid3}>
            <Card
              title="Publicaciones"
              description="Artículos y preprints con referencias estables."
              href="/docs/results/publications"
            />
            <Card
              title="Software"
              description="Releases, repositorios y notas de reproducibilidad."
              href="/docs/results/software"
            />
            <Card
              title="Contacto"
              description="Colaboración, difusión o briefings para responsables públicos."
              href="/docs/contact"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
