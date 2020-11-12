import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Item = styled.div`
  text-align: right;
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
  const { title, description, image, links, releases } = pageContext.data
  return (
    <Layout>
      <SEO title={title} />
      <Item>
        <Image src={image} alt="cover of artist"></Image>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {links && (
            <Links>
              more on{" "}
              {links.map((link, index) => {
                const { text, url } = link

                return (
                  <span key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
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
        <Releases>
          {releases.map(release => {
            return (
              <Release>
                <img src={release.image}></img>
              </Release>
            )
          })}
        </Releases>
      </Item>
    </Layout>
  )
}
