import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import StopIcon from "@material-ui/icons/Stop"

import Meta from "../components/Meta"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
    previousPath,
    nextPath,
    currentPost,
    numPosts
}) => {
    return (
        <ControlsContainer>
            <div>
                <Link to={"/blog"} rel="stop">
                    <StopIcon></StopIcon>
                </Link>
                {previousPath && (
                    <Link to={previousPath} rel="prev">
                        <FastRewindIcon></FastRewindIcon>
                    </Link>
                )}
                <span>{currentPost + 1}</span>
                <span>/</span>{" "}
                <span>
                    {numPosts}
                </span>
                {nextPath && (
                    <Link to={nextPath} rel="next">
                        <FastForwardIcon></FastForwardIcon>
                    </Link>
                )}
            </div>
        </ControlsContainer>
    )
}

const Entry = styled.div`
  a {
    color: black;
  }
  h2 {
    margin-bottom: 5px;
  }
  text-align: right;
  overflow-wrap: break-word;
  word-wrap: break-word;
  width: 100%;
`

const Video = styled.section`
  margin-top: 15px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    width: 50%;
    margin-left: auto;
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

const Description = styled.section``
const Links = styled.section``
const Release = styled.section``

export default ({ pageContext }) => {
    const { previousPath, nextPath, currentPost, numPosts } = pageContext
    const { node } = pageContext.data
    const { title, date, youtube, image, links } = node
    return (
        <Layout>
            <SEO title={title} />
            <Controls previousPath={previousPath} nextPath={nextPath}
                currentPost={currentPost}
                numPosts={numPosts}
            ></Controls>
            <Entry>

                <h2>{title}</h2>
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
        </Layout>
    )
}