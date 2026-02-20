// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI-HPC4CST',
  tagline:
    'Disruptive innovation in CST solar tower systems through Artificial Intelligence and High-Performance Computing',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL
  url: 'https://cst-modelling-tools.github.io',
  // GitHub Pages base URL
  baseUrl: '/ai-hpc4cst/',

  // GitHub Pages deployment config
  organizationName: 'CST-Modelling-Tools',
  projectName: 'ai-hpc4cst',

  trailingSlash: true,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {label: 'English'},
      es: {label: 'Español'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      metadata: [
        {property: 'og:type', content: 'website'},
        {name: 'twitter:title', content: 'AI-HPC4CST'},
        {
          name: 'twitter:description',
          content:
            'Advanced High-Dimensional Metaheuristic Optimisation for Solar Tower and Other Energy Systems',
        },
      ],

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'AI-HPC4CST',
        items: [
          {to: '/', label: 'Home', position: 'left'},

          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            label: 'Documentation',
            position: 'left',
          },

          {
            label: 'Tools',
            position: 'left',
            items: [
              {
                label: 'Generic Optimization Workflow',
                href: 'https://cst-modelling-tools.github.io/generic-optimization-workflow-blog/',
              },
              {
                label: 'Tonatiuh++',
                href: 'https://cst-modelling-tools.github.io/tonatiuhpp-blog/',
              },
            ],
          },

          {
            label: 'GitHub',
            position: 'right',
            items: [
              {
                label: 'AI-HPC4CST Website',
                href: 'https://github.com/CST-Modelling-Tools/ai-hpc4cst',
              },
              {
                label: 'CST-Modelling-Tools Org',
                href: 'https://github.com/CST-Modelling-Tools',
              },
            ],
          },

          {type: 'localeDropdown', position: 'right'},
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Website',
            items: [
              {label: 'Home', to: '/'},
              {label: 'Documentation', to: '/docs/intro'},
              {label: 'Tools', to: '/docs/tools/overview'},
              {label: 'Contact', to: '/docs/contact'},
            ],
          },
          {
            title: 'Tools',
            items: [
              {
                label: 'Generic Optimization Workflow Blog',
                href: 'https://cst-modelling-tools.github.io/generic-optimization-workflow-blog/',
              },
              {
                label: 'Tonatiuh++ Development Blog',
                href: 'https://cst-modelling-tools.github.io/tonatiuhpp-blog/',
              },
              {
                label: 'CST-Modelling-Tools (GitHub)',
                href: 'https://github.com/CST-Modelling-Tools',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} AI-HPC4CST`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
