import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';

function FundingBlock() {
  const {withBaseUrl} = useBaseUrlUtils();

  // This guarantees the exact URL shape that works in your browser:
  // http://localhost:3000/ai-hpc4cst/img/funding/MICIU_AEI.jpg
  const combinedLogo = withBaseUrl('img/funding/MICIU_AEI.jpg');

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
      <div style={{maxWidth: '80ch'}}>
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
          style={{height: 46}}
        />
      </a>
    </div>
  );
}

export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx(ThemeClassNames.layout.footer.container, 'footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        {links}

        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}

        <FundingBlock />
      </div>
    </footer>
  );
}
