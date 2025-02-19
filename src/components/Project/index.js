import React, { useState, useEffect } from "react"

import {
  Container,
  Header,
  MediaBox,
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
      <Header>
        <h1>{project.name} - {project.title}</h1>
        <h2>{project.titleDescription}</h2>
      </Header>
      <Description>
        <p>{project.description}</p>
      </Description>
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
            {project.repo.front && (
              <a href={project.repo.front} target="_blank">
                See Code 🛠️
              </a>)
            }
            <a href={project.url} target="_blank">
              See Live 🖥️
            </a>
          </div>
        </Options>
      </MediaBox>
    </Container>
  )
}

export default Project
