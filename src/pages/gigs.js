import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  ul {
    list-style-type: none;
    li {
      margin-bottom: 128px;
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
        <li>January 31st, 2025:{" "}
              Grantsalat 2 Release with <a
              href={"https://www.instagram.com/obiblanche/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Obi Blanche & B.O.B
            </a>{", "}
            <a
              href={"https://www.instagram.com/spynesmusic/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Spynes
            </a>{", "}and <a
              href={"https://missdrone.bandcamp.com/album/daydreamin-cool"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Miss Drone
            </a> at Milla
          
            <img
              width={"33%"}
              src={"/images/gigs/2025-01-31_grantsalat2_programmheft_2x.png"}
              alt={
                "illustrated poster of the event showing the artists as well as date and location"
              }
              style={{ marginTop: "24px" }}
            ></img>
          </li>
        
      </ul>
      <PastContainer>
        <h2>past</h2>
        <ul>
          <li>
            October 26th, 2024:{" "}
            <a
              href={"https://malomoray.bandcamp.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Malo Moray
            </a>{" "}and <a
              href={"https://www.instagram.com/deuxfemmesmusic/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deux Femmes
            </a> at iRRland2
          
            {/* <img
              width={"33%"}
              src={"/images/gigs/240613_ig_resized.jpg"}
              alt={
                "illustrated poster of the event showing the artist as well as date and location"
              }
              style={{ marginTop: "24px" }}
            ></img> */}
          </li>
          <li>
            July 18th, 2024:{" "}
            <a
              href={"https://www.instagram.com/glump.band/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              glump
            </a>{" "}
            at Psychedelic Krautnacht at Glockenbachwerkstatt
            <br />
            <a
              href={
                "https://www.glockenbachwerkstatt.de/events/psychedelic-krautnacht/"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              event page and tickets
            </a>
            {/* <img
              width={"33%"}
              src={"/images/gigs/240613_ig_resized.jpg"}
              alt={
                "illustrated poster of the event showing the artisst as well as date and location"
              }
              style={{ marginTop: "24px" }}
            ></img> */}
          </li>
          <li>
            June 13th, 2024:{" "}
            <a
              href={"https://www.instagram.com/rhinosdream/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              you c
            </a>
            <br />
            <a
              href={"https://www.finopoly.at/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              F1no
            </a>
            <br></br>
            <a
              href={"https://theherculesandleocase.de/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              the Hercules and Leo Case
            </a>
            <br></br>
            <a
              href={"https://www.instagram.com/randnotiz8"}
              target="_blank"
              rel="noopener noreferrer"
            >
              maria maria
            </a>
            <br></br>
            at Braunauer Eisenbahnbrücke
            <br />
            <img
              width={"33%"}
              src={"/images/gigs/240613_ig_resized.jpg"}
              alt={
                "illustrated poster of the event showing the artisst as well as date and location"
              }
              style={{ marginTop: "24px" }}
            ></img>
          </li>
          <li>
            March 6th, 2024:{" "}
            <a
              href={"https://www.instagram.com/ben_wesch/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ben Wesch
            </a>{" "}
            at{" "}
            <a
              href="https://www.instagram.com/favoritbar0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Favorit Bar
            </a>
            <br />
            <img
              width={"33%"}
              src={"/images/gigs/ben_wesch_ig_post_resized.png"}
              alt={
                "poster of the event showing the artist with his oud as well as date and location"
              }
              style={{ marginTop: "24px" }}
            ></img>
          </li>
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
