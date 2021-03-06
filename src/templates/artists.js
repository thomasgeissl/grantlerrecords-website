import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { createSlug } from "../utils"
import styled from "styled-components"

const List = styled.ul`
  list-style-type: none;
`
const Item = styled.li`
  text-align: right;
  margin-bottom: 256px;
`
const Image = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 33%;
  }
`
const Content = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 66.66%;
  }
`
const Releases = styled.ul`
  list-style-type: none;
  width: 100%;
  @media (min-width: 768px) {
    width: 66.66%;
  }
  padding: 0;
  margin-top: 20px;
`
const Release = styled.li`
  display: inline-block;
  width: 20%;
  img {
    width: 100%;
  }
  margin-left: 15px;
`

const Title = styled.h2``
const Description = styled.section``
const Links = styled.section``

export default ({ pageContext }) => {
  const { artists } = pageContext
  return (
    <Layout>
      <SEO title="artists" />
      <h1>artists</h1>
      <List>
        {artists.map((artist, index) => {
          const { title, description, image, links, releases } = artist.node
          return (
            <Item key={index}>
              <Image src={image} alt="cover of artist"></Image>
              <Content>
                <Title>
                  <Link to={`/artists/${createSlug(title)}`} rel="stop">
                    {title}
                  </Link>
                </Title>
                <Description>{description}</Description>
                {links && (
                  <Links>
                    more on{" "}
                    {links.map((link, index) => {
                      const { text, url } = link

                      return (
                        <span key={index}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {text}
                          </a>
                          {index < links.length - 2 && <>, </>}
                          {index === links.length - 2 && <> or </>}
                        </span>
                      )
                    })}
                    .
                  </Links>
                )}
              </Content>
              {releases && (
                <Releases>
                  {releases.map((release, index) => {
                    return (
                      <Release key={index}>
                        <img src={release.image} alt="cover of release"></img>
                      </Release>
                    )
                  })}
                </Releases>
              )}
            </Item>
          )
        })}
      </List>
    </Layout>
  )
}
