import React from "react"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import { Container, A } from "./styles"

function SocialLinks({ color, marginX }) {
  return (
    <Container>
      <A href="https://github.com/kalfritz" target="_blank" marginX={marginX}>
        <FaGithub size={30} color={color} />
      </A>
      <A
        href="https://www.linkedin.com/in/luiz-ramos-129653168/"
        target="_blank"
        marginX={marginX}
      >
        <FaLinkedin size={30} color={color} />
      </A>

      <A
        href="mailto:luizeliasceem@gmail.com"
        target="_blank"
        marginX={marginX}
      >
        <MdEmail size={30} color={color} />
      </A>
    </Container>
  )
}

export default SocialLinks
