import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data}) => (
  <div>
    <h1>Lastest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={ post.node.id }>
      <h3>{post.node.frontmatter.title}</h3>
      <small>Posted By {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
      <br/>
      <br/>
      <Link to={post.node.frontmatter.path}>Read Post</Link>
      <br/>
      <br/>
      <hr/>
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
            title
            path
            date
            author
            _PARENT
            parent
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
