import styled from "styled-components"

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 10px 15px 5px 15px;
  background: #fff;
  border-bottom: 15px solid #6159c1;
  border-radius: 5px;

  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7.5px;
`;

export const MediaBox = styled.div`
  border: 1px solid #333;
  border-top: none;
  padding: 0px 0px 5px 0px;
  img {
    height: 100%;
    width: 100%;
    border-bottom: 1px solid #333;
  }
  margin-bottom: 10px;
`
export const Techs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 5px 0px;

  span {
    background: #6159c1;
    padding: 5px;
    margin-right: 5px;
    color: #fff;
    margin-bottom: 5px;
  }
`
export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  div {
    a {
      text-decoration: none;
      margin: 0px 5px;
      padding: 5px 10px;
      background: #000;
      color: #fff;

      &:visited {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`
export const Description = styled.div`
  margin-top: 2.5px;
  margin-bottom: 10px;
  font: 0.9rem "Roboto", sans-serif;
`
