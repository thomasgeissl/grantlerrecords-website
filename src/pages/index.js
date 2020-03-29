import React from "react"
import Layout from "../components/layoutFullWidth"
import SEO from "../components/seo"
import styled from "styled-components"

import Meta from "../components/Meta"

import Image from "../components/image"

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

const About = styled.div`
  text-align: right;
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

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <About>
      <p>
        hello folks,<br></br>
        we are a munich based record label. founded in 2020.<br></br>
        our goal is to support music that touches us and hopefully many others
        as well.
      </p>
      {/* <p>
        as a dj collective we spin vinyls in the bars of munich. <br></br>we
        play a mix of post punk, shoegaze, dreampop, new wave and everything in
        between. <br></br>flyers are posted regularly on our{" "}
        <a
          target="_blank"
          href="https://www.instagram.com/grantlersoundsystem/"
        >
          instagram page
        </a>{" "}
        and here is a little teaser{" "}
        <a
          target="_blank"
          href="https://open.spotify.com/playlist/5bQtfOpbN2hoAmS1groTED?si=waVYeq3FRlSbnuxjY1MpPw"
        >
          spotify playlist.
        </a>
      </p> */}
    </About>
    {/* <ImageWrapper>
      <Image></Image>
    </ImageWrapper> */}
    <Blog>
      {/* <li>
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat.
        <br></br>
        <iframe
          width="380"
          height="157.5"
          src="https://www.youtube.com/embed/_AWIqXzvX-U"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </li> */}

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

export default IndexPage
