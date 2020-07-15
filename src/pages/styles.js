import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  background: ${props => props.theme.background};
`
export const LinkGetInTouch = styled(Link)`
  margin-top: 0px;
  border: 1px solid #6159c1;
  padding: 5px 10px;
  background: 0;
  outline: 0;
  font-size: 20px;
  color: #6159c1;
`

export const ScrollIndicator = styled(Link)`
  position: absolute;
  left: 50%;
  top: 85%;
  transform: translateX(-20px);

  i {
    width: 30px;
    height: 30px;
    display: block;
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMCAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxnPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTEuMiwxNC44bDcuMy03LjNjMC42LTAuNiwwLjYtMS44LDAtMi40cy0xLjgtMC42LTIuNCwwTDEwLDExLjJMMy45LDUuMWMtMC42LTAuNi0xLjgtMC42LTIuNCwwDQoJCQlzLTAuNiwxLjgsMCwyLjRsNy4zLDcuM0M5LjUsMTUuNSwxMC41LDE1LjUsMTEuMiwxNC44eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K)
      no-repeat center center #ff3466;
    background-size: 12px;
    border-radius: 100%;
    position: absolute;
    z-index: 100;
    left: 10px;
    top: 10px;
  }

  &:before,
  &:after {
    content: "";
    top: 0;
    left: 0;
    background-color: #ff3466;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
    opacity: 0;
  }

  &:before {
    animation: jumper 1.8s 0.33333s ease-out infinite;
    -webkit-animation: jumper 1.8s 0.33333s ease-out infinite;
  }

  &:after {
    animation: jumper 1.8s 0.66666s ease-out infinite;
    -webkit-animation: jumper 1.8s 0.66666s ease-out infinite;
  }
  @-webkit-keyframes jumper {
    0% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    5% {
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes jumper {
    0% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    5% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const Landing = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @keyframes goUp {
      0% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(-50px);
      }
    }

    animation-name: goUp;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    h1 {
      font-size: 50px;

      span {
        color: #6159c1;
      }
    }
    h2 {
      font-size: 30px;
      color: #333;
      margin-bottom: 15px;
      text-align: center;
    }
  }
`
export const Projects = styled.div`
  padding: 30px;
  background: #6159c1;

  & > h1 {
    color: #fff;
    font-weight: bold;
    padding-bottom: 15px;
    width: 50%;
    margin: 0 auto;
    font-size: 30px;

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
  }
`

export const Contact = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  padding: 0px 30px;

  & > a {
    position: absolute;
    bottom: 25px;
    right: 25px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: #ff3466;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;

    &:hover {
      background-color: #555;
    }
  }

  h1 {
    font-size: 30px;
    color: #fff;
  }

  form {
    width: 50%;
    box-sizing: border-box;

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
    margin: 0px auto 45px;
    padding: 15px;
    background: #6159c1;

    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      width: 90%;
      color: #fff;
      margin-bottom: 3px;
    }

    input,
    textarea {
      width: 90%;
      padding: 8px;
      font-family: Roboto;
      font-size: 14px;
    }

    input {
      margin-bottom: 10px;
    }

    button {
      width: 90%;
      margin: 15px 0px;
      padding: 10px;
      font-size: 16px;
    }
  }
`
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #6159c1;
  padding: 15px;

  p {
    color: #fff;
    margin-top: 15px;
  }
`
