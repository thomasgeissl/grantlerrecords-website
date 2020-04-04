import React from "react"
import Layout from "../components/layoutFullWidth"
import SEO from "../components/seo"
import About from "../components/About"
import News from "../components/News"
import Contact from "../components/Contact"

export default () => {
  return (
    <Layout>
      <SEO title="home" />
      <About />
      <News />
      <Contact />
    </Layout>
  )
}
