const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const createSlug = (Text) => {
    return Text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
      ;
  }
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allBlogJson {
          edges {
            node {
              id
              type
              title
              slug
              author {
                name
                url
              }
              editor {
                name
                url
              }
              date
              youtube
              image
              description
              release
              md
              links {
                text
                url
              }
            }
          }
        }
        articles: allMarkdownRemark {
          edges {
            node {
              frontmatter {
                id
              }
              html
            }
          }
        }
        allArtistsJson {
          edges {
            node {
              title
              description
              links {
                text
                url
              }
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // ...
  // Create blog-list pages
  const posts = result.data.allBlogJson.edges
  const articles = result.data.articles.edges
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  for (let i = 0; i < posts.length; i++) {
    const previousPath = i !== 0 ? `/blog/post/${posts[i - 1].node.slug ? posts[i - 1].node.slug : createSlug(posts[i - 1].node.title)}` : ""
    const post = posts[i]
    let md = null
    if (post.node.md) {
      articles.forEach(article => {
        console.log(article.node.frontmatter.id)
        if (article.node.frontmatter.id == post.node.md) {
          md = article.node
        }
        // console.log(article.node.frontmatter.html)
      })
    }
    const nextPath = i < posts.length - 1 ? `/blog/post/${posts[i + 1].node.slug ? posts[i + 1].node.slug : createSlug(posts[i + 1].node.title)}` : ""
    createPage({
      path: `/blog/post/${post.node.slug ? post.node.slug : createSlug(post.node.title)}`,
      component: path.resolve("./src/templates/blogPost.js"),
      context: {
        previousPath,
        nextPath,
        currentPost: i,
        numPosts: posts.length,
        data: post,
        mdData: post.node.md ? md : null
      },
    })
  }
  const artists = result.data.allArtistsJson.edges
  createPage({
    path: "/artists",
    component: path.resolve("./src/templates/artists.js"),
    context: {
      artists
    },
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
