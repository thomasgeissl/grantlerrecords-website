import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

import styled from "styled-components"

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`
const Content = styled.div`
  flex: 1;
  padding-left: 50px;
  padding-right: 50px;
  a {
    color: black;
  }
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>
        <main>{children}</main>
      </Content>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
