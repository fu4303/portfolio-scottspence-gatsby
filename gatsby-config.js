const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const remarkSlug = require('remark-slug');

const siteMetadata = {
  siteUrl: `https://scottspence.me`,
  title: `Scott Spence - Portfolio`,
  titleTemplate: `%s | scottspence.me`,
  description: `Scott Spence, Father, husband 👨‍👩‍👧. Web Developer. Just In Time learner ❤️👍. JavaScript, Gatsby, React, GraphQL and Netlify.`,
  twitterUsername: `@spences10`,
  facebookAppID: ``,
  socialUserNames: {
    devto: `spences10`,
    github: `spences10`,
    linkedin: `spences10`,
    twitter: `spences10`,
    youtube: ``,
  },
  firstName: `Scott`,
  lastName: `Spence`,
  backgroundColour: `#663399`, // this is for favicon and manifest
  themeColour: `#755f9f`, // this is for favicon and manifest
  nameContent: `Scott Spence - portfolio`,
  developerName: `Scott Spence`,
  developerUrl: `https://scottspence.me`,
  descriptionContent: `Scott Spence - web developer`,
  keywordsContent: `web developer, javascript, react, portfolio, information`,
  faviconPng: `./static/favicon.png`,
  imageLink: `/favicon.png`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  lastBuildDate: new Date(Date.now()).toISOString(),
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
        policy: [
          {
            userAgent: 'Googlebot',
            allow: '/',
            disallow: ['/about/', '/uses/', '/now/', '/portfolio/'],
            crawlDelay: 2,
          },
          {
            userAgent: 'OtherBot',
            allow: '/',
            disallow: ['/about/', '/uses/', '/now/', '/portfolio/'],
            crawlDelay: 2,
          },
          {
            userAgent: '*',
            allow: '/',
            disallow: ['/about/', '/uses/', '/now/', '/portfolio/'],
            crawlDelay: 10,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: `minimal-ui`,
        icon: siteMetadata.faviconPng, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `copy`,
        path: `${__dirname}/copy`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [remarkSlug],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              enableCustomId: true,
              className: 'anchor-toc',
            },
          },
          //   {
          //     resolve: `gatsby-remark-external-links`,
          //     options: {
          //       target: `_blank`,
          //       rel: `noopener`,
          //     },
          //   },
          `gatsby-remark-smartypants`,
          //   `gatsby-transformer-sharp`,
          //   `gatsby-plugin-sharp`,
        ],
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GRAPHCMSDATA`,
        fieldName: `graphcmsdata`,
        // Url to query from
        url: process.env.GATSBY_SOURCE_GRAPHQL,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-fathom`,
      options: {
        siteId: process.env.GATSBY_FATHOM_TRACKING_ID_SCOTT_SPENCE_ME,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Alatsi:400,700', 'Poppins:400,700'],
        },
      },
    },
  ],
};
