import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
const List = styled.ul`
  padding-left: 0;
`
const Entry = styled.li`
  list-style-type: none;
  a {
    color: black;
  }
  h2 {
    margin-bottom: 5px;
  }
`
const Video = styled.section`
  margin-top: 15px;
  margin-bottom: 15px;
`
const Description = styled.section``
const Links = styled.section``
const Release = styled.section``
const Meta = styled.div`
  font-style: italic;
  font-size: 0.8em;
`
export default () => (
  <Layout>
    <SEO title="blog" />
    <h1>blog</h1>
    <List>
      <Entry>
        <h2>Sufjan Stevens and Lowell Brams - Aporia</h2>
        <Meta>2020/03/27</Meta>
        <Video>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/Ilaif-4Q3zw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          ></iframe>
        </Video>
        <Description>
          Aporia is the new album of Sufjan Stevens and his stepfather Lowell
          Brams. it contains 21 ambient, instrumental tracks.
        </Description>
        <Release>
          it was released through their label{" "}
          <a href="https://asthmatickitty.com/" target="_blank">
            Asthmatic Kitty
          </a>{" "}
          on March 24, 2020.
        </Release>
        <Links>
          enjoy it on{" "}
          <a
            href="https://open.spotify.com/album/5gWWMy8wggZzv84wbLuQPT?si=hvVnC_wlSmONvdjscM2apA"
            target="_blank"
          >
            spotify
          </a>{" "}
          or{" "}
          <a href="https://www.youtube.com/watch?v=YIW4yufMVqQ" target="_blank">
            youtube
          </a>
          .
        </Links>
      </Entry>
    </List>
  </Layout>
)
