import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.footer`
  background-color: black;
  color: white;
  font-family: "Rajdhani";
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: right;
  margin-top: 25px;
  a {
    color: white;
  }
`
export default () => {
  return (
    <Container>
      This website does not use cookies and does not track you. <br></br>©{" "}
      {new Date().getFullYear()} Grantler Records,{" "}
      <Link to="/imprint">imprint</Link>
    </Container>
  )
}
