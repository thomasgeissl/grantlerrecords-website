import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  ul {
    list-style-type: none;
    li{
      margin-bottom: 32px;
    }
  }
`
const PastContainer = styled.div`
  text-align: right;
`

export default () => (
  <Layout>
    <SEO title="soundsystem" />
    <Container>
      <h1>gigs</h1>
      <h2>upcoming</h2>
      <ul>
        <li>
          December 14th, 2023: PAAR, Lens Arc, Bedouin Temple<br></br>
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
        </li>
      </ul>
      <PastContainer>
        <h2>past</h2>
        <ul>
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
