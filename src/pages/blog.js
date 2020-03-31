import React from "react"
import styled from "styled-components"
import Meta from "../components/Meta"
import Layout from "../components/layout"
import SEO from "../components/seo"
const List = styled.ul`
  padding-left: 0;
`
const Entry = styled.li`
  text-align: right;
  list-style-type: none;
  a {
    color: black;
  }
  h2 {
    margin-bottom: 5px;
  }
  &:nth-child(odd) {
    > * {
      margin-left: auto;
    }
  }
  &:nth-child(2) {
    text-align: left;
  }
`
const Video = styled.section`
  margin-top: 15px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    width: 33%;
  }
`
const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
const Image = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 33%;
  }
`

const Description = styled.section`
  width: 80%;
`
const Links = styled.section``
const Release = styled.section``
export default () => (
  <Layout>
    <SEO title="blog" />
    <h1>blog</h1>
    <List>
      <Entry>
        <h2>Muzz - Broken Tambourine</h2>
        <Meta>2020/03/31</Meta>
        <Video className="video">
          <VideoWrapper>
            <iframe
              src="https://www.youtube-nocookie.com/embed/z9XmawB0t7Q"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
          </VideoWrapper>
        </Video>
        <Description>
          Muzz was formed by Paul Banks (Interpol), Matt Barrick (the Walkmen,
          Fleet Foxes) and Josh Kaufman (Bonny Light Horseman, Day of the Dead).
          after dropping their first track Bad Feeling on SoundCloud earlier
          this month, the band now officially released their first single.
        </Description>
        <Release>
          Broken Tambourine was released on{" "}
          <a href="https://www.matadorrecords.com/" target="_blank">
            Matador Records
          </a>{" "}
          on March 24, 2020.
        </Release>
        <Links>
          enjoy it on{" "}
          <a
            href="https://open.spotify.com/album/6hMruWCioe2Hhr3RJne3zd?si=hayZdWhCQjeZ9a_B5fD7Ag"
            target="_blank"
          >
            spotify
          </a>{" "}
          or{" "}
          <a href="https://www.youtube.com/watch?v=z9XmawB0t7Q" target="_blank">
            youtube
          </a>
          .
        </Links>
      </Entry>

      <Entry>
        <h2>Nils Frahm - Entry</h2>
        <Meta>2020/03/29</Meta>
        <Image src="https://etr-media.s3-eu-west-1.amazonaws.com/1800/cover.jpg"></Image>
        <Description>
          the eight-track lp was originally written as the soundtrack to a short
          film he shot with his friend Benoit Toulemonde.
        </Description>
        <Release>
          empty was released on{" "}
          <a href="https://www.erasedtapes.com/" target="_blank">
            Erased Types
          </a>{" "}
          on{" "}
          <a href="https://www.pianoday.org/" target="_blank">
            piano day
          </a>
          , March 28, 2020.
        </Release>
        <Links>
          enjoy it on{" "}
          <a
            href="https://open.spotify.com/track/3wUYmc0vGveoD4ltYeOdZt?si=t0-v45piRRGe8TfYdwRpqw"
            target="_blank"
          >
            spotify
          </a>
          ,{" "}
          <a href="https://www.youtube.com/watch?v=8coAT22gZK8" target="_blank">
            youtube
          </a>{" "}
          or{" "}
          <a
            href="https://www.erasedtapes.com/release/eratp134-nils-frahm-empty"
            target="_blank"
          >
            Erased Tapes
          </a>
          .
        </Links>
      </Entry>
      <Entry>
        <h2>Sufjan Stevens and Lowell Brams - Aporia</h2>
        <Meta>2020/03/27</Meta>
        <Video className="video">
          <VideoWrapper>
            <iframe
              src="https://www.youtube-nocookie.com/embed/Ilaif-4Q3zw"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
          </VideoWrapper>
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
