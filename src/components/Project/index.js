import React, { useState, useEffect } from "react"

import {
  Container,
  Header,
  MediaBox,
  Techs,
  Options,
  Description,
  Image,
} from "./styles"

function Project({ project, mediaObj }) {
  const [media, setMedia] = useState('img')
  const handleHover = () => {
    if (!mediaObj.gif) return;

    setMedia('gif')
  }
  const handleMouseLeave = () => {
    if (!mediaObj.gif) return;

    setMedia('img')
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
        <Image
          src={mediaObj.img}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseLeave}
          display={media === 'img' ? 'block' : 'none'}
        />
        <Image
          src={mediaObj.gif}
          onMouseOver={handleHover}
          onMouseLeave={handleMouseLeave}
          display={media === 'gif' ? 'block' : 'none'}
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
