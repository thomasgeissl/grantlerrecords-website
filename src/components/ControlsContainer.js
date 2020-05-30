import styled from "styled-components"
export default styled.div`
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