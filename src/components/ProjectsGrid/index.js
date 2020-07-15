import React from "react"
import metadata from "../../../config/siteMetaData"
import Project from "../Project"
import { Container } from "./styles"

import feed from "../../assets/feed.jpg"
import luppusGif from "../../assets/luppus.gif"
import booklist from "../../assets/booklist.png"
import products from "../../assets/products.png"
import rocketshoes from "../../assets/rocketshoes.gif"

const map = {}
map["Luppus"] = { img: feed, gif: luppusGif }
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
