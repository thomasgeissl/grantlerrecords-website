import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const List = styled.ul`
  list-style-type: none;
`
const Item = styled.li`
  text-align: right;
`
const Image = styled.img`
width: 100%;
@media (min-width: 768px) {
  width: 33%;
}`
const Content = styled.div`
width: 100%;
@media (min-width: 768px) {
  width: 66.66%;
}`

const Title = styled.h2``
const Description = styled.section``
const Links = styled.section``

export default ({ pageContext }) => {
  const {artists} = pageContext
  console.log(artists)
  return (
    <Layout>
      <SEO title="artists" />
      <h1>artists</h1>
      <List>
        {artists.map((artist, index) => {
          const {title, description, image, links} = artist.node
          return (
          <Item>
            <Image src={image}></Image>
            <Content>

            <Title>{title}</Title>
            <Description>{description}</Description>
                  {links && <Links>
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
                </Links>}
            </Content>
          </Item>
          )
        })}
      </List>


    </Layout>
  )
 }