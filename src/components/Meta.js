import React from "react"
import styled from "styled-components"

const Container = styled.div`
  font-style: italic;
  font-size: 0.8em;
`

export default ({ date, author }) => {
  return (
    <Container>
      {author && author.name && author.name !== "" && <><a href={author.url} target="_blank" rel="noopener noreferrer">{author.name}</a> - </>} {date}
    </Container>
  )
}
