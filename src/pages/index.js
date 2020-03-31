import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layoutFullWidth"
import SEO from "../components/seo"
import styled from "styled-components"

import Meta from "../components/Meta"

import Image from "../components/image"
import About from "../components/about"

const ImageWrapper = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    max-width: 200px;
  }
  @media (max-width: 768px) {
    display: block;
    margin: auto;
  }
  margin-top: 15px;
  margin-bottom: 15px;
`

const Contact = styled.div``
const Blog = styled.ul`
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

export default () => (
  <Layout>
    <SEO title="home" />
    <About></About>
    <Blog>
      <li>
        <h2>coming soon</h2>
        <Meta>2020/03/22</Meta>
        <p>more content is hopefully coming soon.</p>
      </li>
      <li>
        <h2>hello world</h2>
        <Meta>2020/03/22</Meta>
        <p>we are happy to announce that we are finally alive.</p>
      </li>
    </Blog>
    <Contact>
      if you are interested in what we are doing or want to collaborate with us,
      please do not hestitate to get in touch with us via
      info@grantlerrecords.de.
    </Contact>
  </Layout>
)
