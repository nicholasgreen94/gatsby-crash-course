import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to my website. This is a sample site for GatsbyJS.</p>
    <p>Now go build something great.</p>
    <Link to="/about/">Go to About Page</Link>
  </div>
)

export default IndexPage
