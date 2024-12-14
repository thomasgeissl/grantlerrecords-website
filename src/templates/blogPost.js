import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import StopIcon from "@material-ui/icons/Stop"

import ControlsContainer from "../components/ControlsContainer"
import Meta from "../components/Meta"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { VideoWrapper } from "../components/Video"

const VideoContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left:auto;
  @media (min-width: 768px) {
    width: 50%;
  }
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



const Image = styled.img`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  @media (min-width: 768px) {
    width: 33%;
  }
`

const Description = styled.section``
const MdDescription = styled.section`
  text-align: left;
  font-size: 1.2em;
  @media (min-width: 768px) {
    text-align: justify;
  }
`
const Links = styled.section``
const Release = styled.section``
const Author = styled.section`margin-top: 24px;`
const Editor = styled.section``

export default ({ pageContext }) => {
    const { previousPath, nextPath, currentPost, numPosts } = pageContext
    const { node } = pageContext.data
    const { title, author, editor, date, youtube, image, links } = node
    return (
        <Layout>
            <SEO title={title} />
            <Controls previousPath={previousPath} nextPath={nextPath}
                currentPost={currentPost}
                numPosts={numPosts}
            ></Controls>
            <Entry>
                <h2>{title}</h2>
                <Meta author={author} date={date}></Meta>
                {youtube && (
                    <VideoContainer className="video">
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
                    </VideoContainer>
                )}
                {image && <Image src={image}></Image>}
                {!pageContext.mdData &&
                    <Description
                        dangerouslySetInnerHTML={{ __html: node.description }}
                    ></Description>
                }
                {pageContext.mdData && pageContext.mdData.html &&
                    <MdDescription
                        dangerouslySetInnerHTML={{ __html: pageContext.mdData.html }}
                    ></MdDescription>
                }
                <Release
                    dangerouslySetInnerHTML={{ __html: node.release }}
                ></Release>
                {links && <Links>
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
                </Links>}
      {author && author.name && author.name !== "" && <Author>written by our dear <a href={author.url} target="_blank" rel="noopener noreferrer">{author.name}</a>.</Author>}
      {editor && editor.name && editor.name !== "" && <Editor>edited by {editor.url && <a href={editor.url} target="_blank" rel="noopener noreferrer">{editor.name}</a>}
                {!editor.url && <>{editor.name}</>}
                .
                </Editor>
          }
            </Entry>
        </Layout>
    )
}
