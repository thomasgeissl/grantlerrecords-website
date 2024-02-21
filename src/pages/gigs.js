import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  ul {
    list-style-type: none;
    li {
      margin-bottom: 48px;
    }
  }
`
const PastContainer = styled.div`
  text-align: right;
`

export default () => (
  <Layout>
    <SEO title="gigs" />
    <Container>
      <h1>gigs</h1>
      <h2>upcoming</h2>
      <ul>
        <li>
          March 6th, 2024:{" "}
          <a
            href={"https://www.instagram.com/ben_wesch/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ben Wesch
          </a>
          at{" "}
          <a
            href="https://www.instagram.com/favoritbar0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Favorit Bar
          </a>
          {/* <img
            width={"50%"}
            src={"/images/gigs/231022_fb.jpg"}
            alt={
              "poster of the event showing a grantler and the names of the bands as well as date and location"
            }
            style={{ marginTop: "24px" }}
          ></img> */}
        </li>
      </ul>
      <PastContainer>
        <h2>past</h2>
        <ul>
          <li>
            December 14th, 2023:{" "}
            <a
              href={"https://paarmusic.bandcamp.com/music"}
              target="_blank"
              rel="noopener noreferrer"
            >
              PAAR
            </a>
            ,{" "}
            <a
              href={"https://lensarc.bandcamp.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lens Arc
            </a>
            , <a href={"https://bedouintemple.bandcamp.com/"}>Bedouin Temple</a>
            <br />
            at{" "}
            <a
              href="https://import-export.cc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Import Export
            </a>
            ,{" "}
            <a
              href="https://t.rausgegangen.de/tickets/paar-lens-arc-bedouin-temple"
              target="_blank"
              rel="noopener noreferrer"
            >
              tickets
            </a>
            <br />
            <a
              href={
                "https://import-export.cc/event/grantler-gigs-pres-paar-lens-arc-bedouin-temple/"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <img
                width={"50%"}
                src={"/images/gigs/231022_fb.jpg"}
                alt={
                  "poster of the event showing a grantler and the names of the bands as well as date and location"
                }
                style={{ marginTop: "24px" }}
              ></img>
            </a>
          </li>
          <li>
            April 14th, 2023: avril 14th - an hommage to Aphex Twin<br></br>
            <a
              href="https://www.instagram.com/glump.band/"
              target="_blank"
              rel="noopener noreferrer"
            >
              glump
            </a>{" "}
            feat.
            <a
              href="
        https://www.finopoly.at/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ƒ1№
            </a>{" "}
            <br></br>
            at{" "}
            <a
              href="https://www.instagram.com/rennsalon_bar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rennsalon
            </a>
          </li>
        </ul>
      </PastContainer>
    </Container>
  </Layout>
)
