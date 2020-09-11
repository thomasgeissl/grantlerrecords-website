import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.header`
  display: flex;
  justify-content: flex-start;
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
`
const Headline = styled.span`
  background-color: white;
  color: black;
  margin-bottom: auto;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 15px;
  a {
    text-decoration: none;
    background-color: white;
    color: black;
  }
`
const Item = styled.span`
  background-color: white;
  color: black;
  margin-left: 5px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: auto;
  a {
    text-decoration: none;
    background-color: white;
    color: black;
  }
`
const Subline = styled.span`
  margin: 0;
  font-size: 16px;
  display: inline-block;
  margin-top: auto;
  padding-left: 5px;
  padding-right: 5px;

  @media (max-width: 576px) {
    display: none;
  }
`

const Menu = styled.ul`
  list-style-type: none;
  float: right;
  margin: 0;
  margin-left: auto;
`
export default () => {
  return (
    <Container>
      <Headline>
        <Link to="/">grantler records</Link>
      </Headline>
      <Subline>a home for direct, imperfect and honest music</Subline>
      <Menu>
        <Item>
          <Link to="/artists">artists</Link>
        </Item>
        <Item>
          <Link to="/blog">blog</Link>
        </Item>
      </Menu>
    </Container>
  )
}
