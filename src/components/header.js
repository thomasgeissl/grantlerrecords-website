import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.header`
  background-color: black;
  color: white;
  font-size: 24px;
  h1 {
    margin: 0;
  }
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-bottom: 25px;
  a {
    text-decoration: none;
  }
`
const Headline = styled.span`
  background-color: white;
  color: black;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 15px;
`
const Subline = styled.span`
  margin: 0;
  font-size: 16px;
  padding-left: 5px;
  padding-right: 5px;
  @media (max-width: 768px) {
    display: inline-block;
  }
`
export default () => {
  return (
    <Container>
      <Link to="/">
        <Headline>grantler records</Headline>
      </Link>
      <Subline>a home for direct, imperfect and honest music</Subline>
    </Container>
  )
}
