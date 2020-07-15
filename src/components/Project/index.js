import React, { useState, useEffect } from "react"

import {
  Container,
  MediaBox,
  Media,
  Techs,
  Options,
  Description,
} from "./styles"

function Project({ project, mediaObj }) {
  const [media, setMedia] = useState(mediaObj.img)
  const handleHover = () => {
    if (mediaObj.gif) setMedia(mediaObj.gif)
  }
  const handleMouseLeave = () => {
    if (mediaObj.gif) setMedia(mediaObj.img)
  }

  return (
    <Container>
      <h1>
        {project.name} - {project.title}
      </h1>
      <Techs>
        {project.techs.map(tech => (
          <span key={tech}>{tech}</span>
        ))}
      </Techs>
      <MediaBox>
        <img
          src={media}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseLeave}
        />
        <Options>
          <div>
            <a href={project.repo.front} target="_blank">
              See Code
            </a>
            <a href={project.url} target="_blank">
              See Project
            </a>
          </div>
        </Options>
      </MediaBox>
      <Description>
        <p>{project.description}</p>
      </Description>
    </Container>
  )
}

export default Project
