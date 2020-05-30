import React from "react"
import styled from "styled-components"
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

const Container = styled.section`
  margin-top: 15px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    width: 33%;
  }
`

export default ({ youtube }) => {
    return (
        <Container className="video">
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
        </Container>
    )
}
export { VideoWrapper, Container }
