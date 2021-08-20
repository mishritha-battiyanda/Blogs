// pages/blog.js
import React from "react";
import Layout from "../../components/Layout";
import {Link} from 'gatsby'
import { graphql } from "gatsby";

const BlogHome = (  ) => {
console.log()
  return(
  <Layout>
    <h1>Blog</h1>
    <Link to="./first-blog" >My first blog</Link><br/>
    <Link to="./second-blog" >My second blog</Link><br/>
    <Link to="./third-blog">My third blog</Link>
    <p>
      JavaScript is Everywhere. Millions of webpages are built on JavaScript and
      it’s not going anywhere at least for now. On one side HTML and CSS give
      styling to the web pages but on the other side, it’s the magic of
      JavaScript that makes your web page alive. Today this language is not just
      limited to your web browser. You can also use it for server-side
      applications.
    </p>
    {/* {dataquery.allMdx.nodes.map((node) => (
        <article key={node.id}>
              <Link to={node.slug}>
                {node.frontmatter.title}
              </Link>     
        </article>
      ))} */}
      </Layout>
)}

// export const query = graphql`
//   query {
//     allMdx {
//       nodes {
//         frontmatter {
//           date
//           title
//         }
//         id
//         slug
//       }
//     }
//   }
// `;

export default BlogHome;
