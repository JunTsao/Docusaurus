// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '优特科技邮箱系统帮助文档',
  tagline: 'Dinosaurs are cool',
  url: 'http://its.ut.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ut.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'utmail-doc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "manual",
        path: "manual",
        routeBasePath: "manual",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sslvpn",
        path: "sslvpn",
        routeBasePath: "sslvpn",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "exchange",
        path: "exchange",
        routeBasePath: "exchange",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "question",
        path: "question",
        routeBasePath: "question",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "itsupport",
        path: "itsupport",
        routeBasePath: "itsupport",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '优特科技信息帮助中心',
        logo: {
          alt: 'UT Logo',
          src: 'img/ut.png',
        },
        items: [
          { to: "/manual", label: "👨‍💻 园区手册", position: "left" },
          { to: "/itsupport", label: "👨‍💻 信息服务", position: "left" },
          { to: "/exchange", label: "👨‍💻 企业邮箱", position: "left" },
          { to: "/sslvpn", label: "👨‍💻 SSL VPN", position: "left" },
          { to: "/question", label: "👨‍💻 常见问题", position: "left" },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 珠海优特电力科技股份有限公司.
        <br>Powered by 质量与信息部信息组`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
