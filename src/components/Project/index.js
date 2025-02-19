import React, { useState } from "react"
import { InView } from "react-intersection-observer" // Import InView component

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
        
        {/* Use InView to detect when the GIF is in the viewport */}
        <InView triggerOnce={true} threshold={0.5}>
          {({ inView, ref }) => (
            <Image
              ref={ref} // Attach ref to the InView component
              src={inView ? mediaObj.gif : mediaObj.img} // Load GIF only when in view
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
              display={media === 'gif' ? 'block' : 'none'}
              loading="lazy" // Enable lazy loading for the image
            />
          )}
        </InView>
        
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
