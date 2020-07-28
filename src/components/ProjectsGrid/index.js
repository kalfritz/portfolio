import React from "react"
import metadata from "../../../config/siteMetaData"
import Project from "../Project"
import { Container } from "./styles"

import feed from "../../assets/feed.jpg"
import luppusGif from "../../assets/luppus.gif"
import fire from "../../assets/fire.png"
import pokeGif from "../../assets/pokestore.gif"
import products from "../../assets/products.png"
import rocketshoes from "../../assets/rocketshoes.gif"
import booklist from "../../assets/booklist.png"

const map = {}
map["Luppus"] = { img: feed, gif: luppusGif }
map["PokeStore"] = { img: fire, gif: pokeGif }
map["RocketShoes"] = { img: products, gif: rocketshoes }
map["MyBookList"] = { img: booklist, gif: null }

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
