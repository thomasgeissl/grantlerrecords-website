import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Meta from "../components/Meta"
import Layout from "../components/layout"
import SEO from "../components/seo"
const List = styled.ul`
  padding-left: 0;
`
const Entry = styled.li`
  list-style-type: none;
  a {
    color: black;
  }
  h2 {
    margin-bottom: 5px;
  }
  &:nth-child(odd) {
    > * {
      margin-left: auto;
    }
  }
  &:nth-child(even) {
    text-align: left;
  }
  &:nth-child(odd) {
    text-align: right;
  }
`
const Video = styled.section`
  margin-top: 15px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    width: 33%;
  }
`
const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
const Image = styled.img`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  @media (min-width: 768px) {
    width: 33%;
  }
`

const Description = styled.section`
  width: 80%;
`
const Links = styled.section``
const Release = styled.section``

export default () => {
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
        }
      }
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
  `)
  return (
    <Layout>
      <SEO title="blog" />
      <h1>blog</h1>
      <p>
        this blog is accompanied by a{" "}
        <a
          href="https://open.spotify.com/playlist/4gcAPvO0XO126hdW1OIG1O?si=7WwYh8iYTJmI3RrfjFYF5w"
          target="_blank"
        >
          spotify playlist
        </a>
        .
      </p>
      <List>
        {data.allBlogJson.edges.map(post => {
          const { node } = post
          const { title, date, youtube, image, links } = node
          return (
            <Entry>
              <h2>{title}</h2>
              <Meta>{date} </Meta>
              {youtube && (
                <Video className="video">
                  <VideoWrapper>
                    <iframe
                      src={"https://www.youtube-nocookie.com/embed/" + youtube}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullscreen
                    ></iframe>
                  </VideoWrapper>
                </Video>
              )}
              {image && <Image src={image}></Image>}
              <Description
                className="description"
                dangerouslySetInnerHTML={{ __html: node.description }}
              ></Description>
              <Release
                dangerouslySetInnerHTML={{ __html: node.release }}
              ></Release>
              <Links>
                Enjoy it on{" "}
                {links.map((link, index) => {
                  const { text, url } = link

                  return (
                    <span>
                      <a href={url} target="_blank">
                        {text}
                      </a>
                      {index < links.length - 2 && <>, </>}
                      {index === links.length - 2 && <> or </>}
                    </span>
                  )
                })}
                .
              </Links>
            </Entry>
          )
        })}
      </List>
    </Layout>
  )
}
