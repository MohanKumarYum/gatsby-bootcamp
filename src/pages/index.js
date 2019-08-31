import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// export default () => <div>The Great Gatsby Bootcamp</div>

const IndexPage = () => {
  return (
      <Layout>
        <h1>Hello.</h1>
        <h2>I'm Mohan, a full-stack developer living in beautiful Sydney.</h2>
        <p>
          Need a developer? <Link to="/contact">Contact me.</Link>
        </p>
      </Layout>
  )
}

export default IndexPage
