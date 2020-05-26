module.exports = {
  pathPrefix: "/grantlerrecords-website",
  siteMetadata: {
    title: `grantler records`,
    description: `label, soundsystem and blog - a home for direct, imperfect and honest music. we are very much into diy.`,
    keywords: ["grantler", "music", "label", "diy", "blog", "soundsystem"],
    author: `grantler records`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allBlogJson } }) => {
              return allBlogJson.edges.map(edge => {
                return Object.assign(
                  {},
                  {
                    title: edge.node.title,
                    author: "grantler records",
                    description: edge.node.description,
                    date: edge.node.date,
                    url: "https://grantlerrecords.com/blog",
                    guid: encodeURI(`${edge.node.date}_${edge.node.title}`),
                  }
                )
              })
            },
            query: `
              {
                allBlogJson {
                  edges {
                    node {
                      id
                      title
                      date
                      youtube
                      image
                      description
                      release
                      links {
                        text
                        url
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "grantler records rss feed",
          },
        ],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rajdhani`,
            variants: [`400`, `700`],
          },
          {
            family: `Rajdhani`,
            subsets: [`latin`],
          },
        ],
      },
    },
  ],
}
