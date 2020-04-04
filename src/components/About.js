import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  text-align: right;
`

export default () => {
  return (
    <Container>
      <p>
        hello folks, <br></br>
        we are a munich based record label. founded in 2020.<br></br>
        our goal is to support music that touches us and hopefully many others
        as well.
      </p>
      <p>
        we are very much into vinyls and <Link to="/soundsystem">djing</Link>.
      </p>
    </Container>
  )
}
