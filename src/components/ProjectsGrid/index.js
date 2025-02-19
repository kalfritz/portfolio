import React from "react"
import metadata from "../../../config/siteMetaData"
import Project from "../Project"
import { Container } from "./styles"

const map = {
  "Maestro": { img: "/maestro.png", gif: "/maestro.gif" },
  "SociHub": { img: "/socihub.jpg", gif: "/socihub.gif" },
  "PokeStore": { img: "/pokestore.png", gif: "/pokestore.gif" }
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
