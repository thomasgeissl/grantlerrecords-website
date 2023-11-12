import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Meta from "./Meta"
import Video from "./Video"

const Links = styled.section``
const Description = styled.section``

const Container = styled.ul`
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 50px;
  /* text-align: right; */
  @media (min-width: 768px) {
    width: 66%;
  }
  background-color: black;
  color: white;
  a {
    color: white;
  }
  li {
    list-style-type: none;
    h2 {
      margin-bottom: 5px;
    }
    p {
      margin-top: 5px;
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query headingQueryAndHeadingQuery {
      allNewsJson {
        edges {
          node {
            id
            date
            description
            title
            youtube
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
    <Container>
      {data.allNewsJson.edges.map((post, index) => {
        const { node } = post
        const { title, date, description, youtube, links } = node
        return (
          <li key={index}>
            <h2>{title}</h2>
            <Meta date={date}></Meta>
            {youtube && (
              <div>
                <Video className="video" youtube={youtube}></Video>
              </div>
            )}
            <Description>{description}</Description>
            {links && links.length > 0 && (
              <Links>
                Enjoy it on{" "}
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
          </li>
        )
      })}
    </Container>
  )
}
