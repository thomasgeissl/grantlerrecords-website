const createSlug = Text => {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}

module.exports = {
  pathPrefix: "/grantlerrecords-website",
  siteMetadata: {
    title: `grantler records`,
    description: `a home for direct, imperfect and honest music.`,
    siteUrl: `https://grantlerrecords.com`,
    keywords: ["grantler", "music", "label", "diy", "blog", "soundsystem"],
    author: `grantler records`,
    image: `/logo.png`,
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
                siteUrl
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
                    url:
                      site.siteMetadata.siteUrl +
                      "/blog/post/" +
                      createSlug(edge.node.title),
                    guid:
                      site.siteMetadata.siteUrl +
                      "/blog/post/" +
                      createSlug(edge.node.title),
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/articles`,
        name: `articles`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
