import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Meta from "./Meta"

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
          }
        }
      }
    }
  `)
  return (
    <Container>
      {data.allNewsJson.edges.map(post => {
        const { node } = post
        const { title, date, description } = node
        return (
          <li>
            <h2>{title}</h2>
            <Meta>{date}</Meta>
            <p>{description}</p>
          </li>
        )
      })}
    </Container>
  )
}
