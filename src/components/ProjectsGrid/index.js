import React from "react"
import metadata from "../../../config/siteMetaData"
import Project from "../Project"
import { Container } from "./styles"

import maestro from "../../assets/maestro.png"
import maestroGif from "../../assets/maestro.gif"
import socihub from "../../assets/socihub.jpg"
import socihubGif from "../../assets/socihub.gif"
import pokestore from "../../assets/pokestore.png"
import pokeGif from "../../assets/pokestore.gif"

const map = {}
map["Maestro"] = { img: maestro, gif: maestroGif }
map["SociHub"] = { img: socihub, gif: socihubGif }
map["PokeStore"] = { img: pokestore, gif: pokeGif }

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
