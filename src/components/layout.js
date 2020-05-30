/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
  main {
    max-width: 1024px;
    margin: auto;
  a {
    color: black;
  }
}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
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
