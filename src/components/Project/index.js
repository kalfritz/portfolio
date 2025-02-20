import React, { useState } from "react"
import { InView } from "react-intersection-observer"

import {
  Container,
  Header,
  MediaBox,
  Techs,
  Options,
  Description,
  Image,
  Video,
} from "./styles"

function Project({ project, mediaObj }) {
  const [media, setMedia] = useState('image')

  const handleHover = () => {
    if (!mediaObj.video) return;
    setMedia('video')
  }

  const handleMouseLeave = () => {
    setMedia('image')
  }

  return (
    <Container
      onMouseOver={handleHover} 
      onMouseLeave={handleMouseLeave}
    >
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
          display={media === 'image' ? 'block' : 'none'}
        />
        {mediaObj.video ? (
          <Video
            src={mediaObj.video}
            autoPlay
            loop
            muted
            playsInline
            display={media === 'video' ? 'block' : 'none'}
          />
          ) : null
        }
        <Options>
          <div>
            {project.repo.front && (
              <a href={project.repo.front} target="_blank" rel="noopener noreferrer">
                See Code 🛠️
              </a>
            )}
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              See Live 🖥️
            </a>
          </div>
        </Options>
      </MediaBox>
    </Container>
  )
}

export default Project
