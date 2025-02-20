import React from "react"
import metadata from "../../../config/siteMetaData"
import Project from "../Project"
import { Container } from "./styles"

const map = {
  "Maestro": { img: "/maestro.webp", video: "/maestro.mp4" },
  "SociHub": { img: "/socihub.webp", video: "/socihub.mp4" },
  "PokeStore": { img: "/pokestore.webp", video: "/pokestore.mp4" }
};

function ProjectsGrid() {
  return (
    <Container>
      {metadata.projects.map(project => (
        <Project
          key={project.title}
          project={project}
          mediaObj={map[project.name]}
        />
      ))}
    </Container>
  )
}

export default ProjectsGrid
