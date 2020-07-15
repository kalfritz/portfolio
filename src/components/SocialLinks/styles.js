import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const A = styled.a`
  cursor: pointer;
  margin: 0px ${props => props.marginX}px;
  &:visited {
    text-decoration: none;
    color: black;
  }
`
