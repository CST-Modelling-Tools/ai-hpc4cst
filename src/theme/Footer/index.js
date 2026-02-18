import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

function FundingBlock() {
  // IMPORTANT: use the combined logo you actually have
  const combinedLogo = useBaseUrl('/img/funding/MICIU_AEI.jpg');

  return (
    <div
      style={{
        borderTop: '1px solid var(--ifm-color-emphasis-200)',
        paddingTop: '1rem',
        marginTop: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <div style={{maxWidth: '72ch'}}>
        <div style={{fontWeight: 800, marginBottom: '0.25rem'}}>
          <Translate id="footer.funding.title">Funding</Translate>
        </div>

        <div style={{opacity: 0.9}}>
          <Translate id="footer.funding.text">
            Grant ATR2024-155003 funded by MICIU/AEI/10.13039/501100011033.
          </Translate>
        </div>
      </div>

      <a
        href="https://www.aei.gob.es/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="MICIU and AEI"
        style={{display: 'inline-flex', alignItems: 'center'}}>
        <img
          className="funding-logo"
          src={combinedLogo}
          alt="MICIU and AEI"
          style={{
            height: 64,
            objectFit: 'contain'
          }}
        />
      </a>
    </div>
  );
}

export default function Footer() {
  const {siteConfig} = useDocusaurusContext();
  const footer = siteConfig.themeConfig?.footer;

  return (
    <footer className={clsx('footer', footer?.style && `footer--${footer.style}`)}>
      <div className="container container-fluid">
        {footer?.links?.length ? (
          <div className="row footer__links">
            {footer.links.map((link, i) => (
              <div key={i} className="col footer__col">
                {link.title ? <div className="footer__title">{link.title}</div> : null}
                <ul className="footer__items clean-list">
                  {(link.items || []).map((item, j) => (
                    <li key={j} className="footer__item">
                      {item.to ? (
                        <Link className="footer__link-item" to={item.to}>
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          className="footer__link-item"
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer">
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}

        <FundingBlock />

        <div style={{marginTop: '0.75rem', opacity: 0.85, fontSize: '0.9rem'}}>
          © {new Date().getFullYear()} {siteConfig.title}
        </div>
      </div>
    </footer>
  );
}
