import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  // useStaticQuery() used for passing queries in Components
  const data = useStaticQuery(graphql`
    query {
      astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      icon: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Img fluid={data.astronaut.childImageSharp.fluid} />{" "}
      <Img fluid={data.icon.childImageSharp.fluid} />{" "}
    </div>
  )
}

export default Image
