// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gouache',
  tagline: 'Design Data Platform for everyone',
  url: 'https://gouache.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Gouache', 
  projectName: 'Gouache Docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Gouache-app/docs/blob/main/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Gouache',
        logo: {
          alt: 'Gouache Logo',
          src: 'img/gouache-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {href: 'https://medium.com/gouache-app', label: 'Blog', position: 'left'},
          {href: 'https://gouache.app/send-feedback', label: 'Send feedback', position: 'left'},
          {
            href: 'https://github.com/Gouache-app',
            label: 'GitHub',
            position: 'right',
          },
          
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Gouache App',
                href: 'https://gouache.app',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Send Feedback',
                href: 'https://gouache.app/send-feedback',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/M5qZ6HqDUn',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/gouache-app',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Gouache-app',
              },
              {
                label: "Changelog",
                href: "https://gouache.app/changelog"
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gouache, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
