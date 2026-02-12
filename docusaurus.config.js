// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cst-modelling-tools.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ai-hpc4cst/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cst-modelling-tools', // Usually your GitHub org/user name.
  projectName: 'ai-hpc4cst', // Usually your repo name.
  
  trailingSlash: true,
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: { label: 'English' },
      es: { label: 'Español' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AI-HPC4CST',
        logo: {
          alt: 'AI-HPC4CST',
          src: 'img/logo.svg', // Replace later with official project logo
        },
        items: [
          // Home
          { to: '/', label: 'Home', position: 'left' },

          // Project (opens the full sidebar navigation)
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            label: 'Project',
            position: 'left',
          },

          // Direct top-level entries (linked by docId, not raw paths)
          {
            type: 'doc',
            docId: 'research/overview',
            label: 'Research',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'results/publications',
            label: 'Results',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'team/core-team',
            label: 'Team',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'contact',
            label: 'Contact',
            position: 'left',
          },

          // Tools dropdown
          {
            label: 'Tools',
            position: 'left',
            items: [
              {
                label: 'Tonatiuh++',
                href: 'https://cst-modelling-tools.github.io/tonatiuhpp-blog/',
              },
              // Future tools:
              // {
              //   label: 'Tool X',
              //   href: 'https://cst-modelling-tools.github.io/toolx-blog/',
              // },
            ],
          },

          // GitHub dropdown
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

          // Language selector
          { type: 'localeDropdown', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'AI-HPC4CST',
            items: [
              {label: 'Project', to: '/docs/project/objectives'},
              {label: 'Research', to: '/docs/research/overview'},
              {label: 'Results', to: '/docs/results/publications'},
              {label: 'Contact', to: '/docs/contact'},
            ],
          },
          {
            title: 'Tools',
            items: [
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
