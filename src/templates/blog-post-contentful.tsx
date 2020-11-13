import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import ScrollToTop from "react-scroll-to-top";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
const style = require('./blog.module.css');



interface Props {
  data: {
    contentfulPost: any
    site: {
      siteMetadata: {
        title: String
        image: String
      }
    }
  }
  pageContext: String
  location: String
}


const BlogPostContentfulTemplate = ({ data, location }: Props) => {
  const post = data.contentfulPost
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.subtitle}
      />
      <div className={style.blogPost} itemScope itemType="http://schema.org/Article" >
        <div className={style.blogImage}>

          <Img fluid={post?.image?.fluid} alt="" />


          <h3 itemProp="headline">{post.title}</h3>
          <p>Author : <strong>{post.author}</strong> </p>

          <p>Updated on : <strong>{post.date}</strong> </p>
          <hr />


        </div>

        <div style={{ padding: "15px" }}
          dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }}
          itemProp="articleBody"
        >
        </div>

        <ScrollToTop smooth color='white' style={{ backgroundColor: 'red', width: '40px', height: "50px"}} />

        <hr />

        <footer>
          <Bio />
        </footer>

      </div>
    
    </Layout>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
query ContentfulBlogPostBySlug($slug: String!) {
  site {
    siteMetadata {
      title
      author {
        name
      }
    }
  }
  contentfulPost( slug: {eq: $slug}) {
    author
    subtitle
    date
    title
    image {
      fluid{
        ...GatsbyContentfulFluid
      }
    }
    content {
      childContentfulRichText {
        html
      }
    }
  }
}

`
