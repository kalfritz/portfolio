import React, { useRef } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Textarea from "react-textarea-autosize"
import { FaArrowCircleUp } from "react-icons/fa"

import ProjectsGrid from "../components/ProjectsGrid"
import SocialLinks from "../components/SocialLinks"

import {
  Container,
  Landing,
  Projects,
  Contact,
  Footer,
  LinkGetInTouch,
  ScrollIndicator,
} from "./styles"
import Layout from "../layouts/Layout"

export default function Home() {
  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const messageInputRef = useRef(null)
  const handleClick = () => {
    setTimeout(() => {
      nameInputRef.current && nameInputRef.current.focus()
    }, 1000)
  }

  // const handleSubmit = () => {
  //   if (nameInputRef) nameInputRef.current.value = ""
  //   if (emailInputRef) emailInputRef.current.value = ""
  //   if (messageInputRef) messageInputRef.current.value = ""
  // }

  return (
    <Layout>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Luiz Ramos | Portfolio</title>
          <link
            rel="canonical"
            href="https://luizramos.dev"
          />
        </Helmet>
        <Landing id="home">
          <div>
            <h1>
              Hi. I'm <span>Luiz</span>.
            </h1>
            <h2>I am a Software Engineer.</h2>
            <SocialLinks color="#000" marginX="5" />
          </div>
          <LinkGetInTouch to="/#contact" onClick={handleClick}>
            Get in touch
          </LinkGetInTouch>
          <ScrollIndicator to="/#projects">
            <i></i>
          </ScrollIndicator>
        </Landing>
        <Projects id="projects">
          <h1>My latest work</h1>
          <ProjectsGrid />
        </Projects>
        <Contact id="contact">
          <form
            action="https://getform.io/f/2995d47a-7b93-4345-a255-44e7f63f40e8"
            method="POST"
          >
            <h1 onClick={handleClick}>Get in touch</h1>

            <label for="name">Name</label>
            <input type="text" name="name" id="name" ref={nameInputRef} />
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              ref={emailInputRef}
              required
            />
            <label for="message">Message</label>
            <Textarea
              type="text"
              name="message"
              id="message"
              ref={messageInputRef}
              minRows="6"
              required
            />
            <button type="submit">Submit</button>
          </form>
          <Link to="/#home" title="Go to top">
            <FaArrowCircleUp size={25} />
          </Link>
        </Contact>
        <Footer>
          <SocialLinks color="#fff" marginX="10" />
          <p>Made with Gatsby and hosted on Vercel ❤️</p>
        </Footer>
      </Container>
    </Layout>
  )
}
