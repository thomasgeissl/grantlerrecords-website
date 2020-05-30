import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import RssFeedIcon from "@material-ui/icons/RssFeed"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import StopIcon from "@material-ui/icons/Stop"

import { createSlug } from "../utils"

import Meta from "../components/Meta"
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
  &:nth-child(odd) {
    > * {
      margin-left: auto;
    }
  }
  &:nth-child(even) {
    text-align: left;
  }
  &:nth-child(odd) {
    text-align: right;
  }
  overflow-wrap: break-word;
  word-wrap: break-word;
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
  margin-top: 15px;
  margin-bottom: 15px;
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

const ControlsContainer = styled.div`
  text-align: right;
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    * {
      margin-right: 12px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  margin-top: 32px;
`
const Controls = ({
  isFirst,
  isLast,
  firstPage,
  lastPage,
  numPages,
  currentPage,
  prevPage,
  nextPage,
}) => {
  return (
    <ControlsContainer>
      <div>
        {!isFirst && (
          <Link to={firstPage} rel="stop">
            <StopIcon></StopIcon>
          </Link>
        )}
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            <SkipPreviousIcon></SkipPreviousIcon>
          </Link>
        )}
        <span>{currentPage}</span>
        <span>/</span>{" "}
        {!isLast && (
          <Link to={lastPage} rel="next">
            {numPages}
          </Link>
        )}
        {isLast && <>{numPages}</>}
        {!isLast && (
          <Link to={nextPage} rel="next">
            <SkipNextIcon></SkipNextIcon>
          </Link>
        )}
      </div>
    </ControlsContainer>
  )
}

export default class Blog extends React.Component {
  render() {
    const data = this.props.data
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      "/blog/" + (currentPage - 1 === 1 ? "" : (currentPage - 1).toString())
    const nextPage = "/blog/" + (currentPage + 1).toString()
    const firstPage = "/blog/"
    const lastPage = "/blog/" + numPages.toString()
    return (
      <Layout>
        <SEO title="blog" />
        <h1>
          blog{" "}
          <a
            href="http://grantlerrecords.de/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RssFeedIcon></RssFeedIcon>
          </a>
        </h1>
        <p>
          this blog is accompanied by a{" "}
          <a
            href="https://open.spotify.com/playlist/4gcAPvO0XO126hdW1OIG1O?si=7WwYh8iYTJmI3RrfjFYF5w"
            target="_blank"
            rel="noopener noreferrer"
          >
            spotify playlist
          </a>
          .
        </p>
        <Controls
          isFirst={isFirst}
          isLast={isLast}
          firstPage={firstPage}
          lastPage={lastPage}
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          numPages={numPages}
        ></Controls>
        <List>
          {data.allBlogJson.edges.map((post, index) => {
            const { node } = post
            const { title, date, youtube, image, links } = node
            return (
              <Entry key={index}>
                <Link to={`/blog/post/${createSlug(title)}`} rel="stop">
                  <h2 id={encodeURI(`${date}_${title}`)}>{title}</h2>
                </Link>
                <Meta>{date} </Meta>
                {youtube && (
                  <Video className="video">
                    <VideoWrapper>
                      <iframe
                        title="youtube"
                        src={
                          "https://www.youtube-nocookie.com/embed/" + youtube
                        }
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </VideoWrapper>
                  </Video>
                )}
                {image && <Image src={image}></Image>}
                <Description
                  className="description"
                  dangerouslySetInnerHTML={{ __html: node.description }}
                ></Description>
                <Release
                  dangerouslySetInnerHTML={{ __html: node.release }}
                ></Release>
                <Links>
                  Enjoy it on{" "}
                  {links.map((link, index) => {
                    const { text, url } = link

                    return (
                      <span key={index}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {text}
                        </a>
                        {index < links.length - 2 && <>, </>}
                        {index === links.length - 2 && <> or </>}
                      </span>
                    )
                  })}
                  .
                </Links>
              </Entry>
            )
          })}
        </List>
        <Controls
          isFirst={isFirst}
          isLast={isLast}
          firstPage={firstPage}
          lastPage={lastPage}
          prevPage={prevPage}
          nextPage={nextPage}
          currentPage={currentPage}
          numPages={numPages}
        ></Controls>
      </Layout>
    )
  }
}
export const blogQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allBlogJson(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          title
          date
          youtube
          image
          description
          release
          links {
            text
            url
          }
        }
      }
    }
  }
`
