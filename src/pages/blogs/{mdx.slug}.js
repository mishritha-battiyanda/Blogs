
import * as React from 'react'
import Layout from '../../components/Layout'
import { graphql ,Link} from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
const BlogPost = ({data}) => {
  console.log(data)
  return (
   
    <Layout pageTitle={data.mdx.frontmatter.title}>
    
    <h2>Title: {data.mdx.frontmatter.title}</h2>
      <p>Posted : {data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <Link to="/blogs">back to blog</Link>
    </Layout>
  )
}
export const query=graphql`
query($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      date
      description
      title
    }
    body
    id
  }
}`

export default BlogPost;