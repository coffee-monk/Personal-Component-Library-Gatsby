import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "../components/image"
import GridColumns from "../components/grid-columns"
import GridRows from "../components/grid-rows"
import GridSpan from "../components/grid-span"
import GridTemplateAreas from "../components/grid-template-areas"
import GridMediaQueries from "../components/grid-media-queries"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Image</h2>
    <Image />
    <h2>Grid Columns</h2>
    <GridColumns />
    <h2>Grid Rows</h2>
    <GridRows />
    <h2>Grid Span</h2>
    <GridSpan />
    <h2>Grid Template Areas</h2>
    <GridTemplateAreas />
    <h2>Grid Media Queries</h2>
    <GridMediaQueries />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
