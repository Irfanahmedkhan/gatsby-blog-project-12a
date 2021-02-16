import React from "react"
import { Link, graphql } from "gatsby"

// import Img from 'gatsby-image'
import TotalSlug from '../components/TotalSlug'


import Bio from "../components/bio"
import Layout from "../components/layout"
import { Image } from "react-bootstrap";
const style = require('./index.module.css');


interface Props {
  location: any


  data: {
    allContentfulPost: String
    image: String
    site: {
      siteMetadata: {
        title: string
        image: string
        
      }
    }
  }
}


const BlogIndex = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allContentfulPost.edges



  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (

    <Layout location={location} title={siteTitle}>
              

      <Bio />
      <div className={style.mainPage}>

        {posts.map((post: { node: { title; slug; subtitle; excerpt} }, i: number) => {
          const title = post.node.title || post.node.slug

          return (
            <Link to={post.node.slug} key={i} itemProp="url">

              <div key={post.node.slug} className={style.post}
                itemScope itemType="http://schema.org/Article"  >

                <div className={style.postImage} >
                  <Image src={post.node?.image?.fluid?.src} fluid />
                </div>


                <div className={style.postText}>
                  <h5>
                    <span itemProp="headline">{title}</span>
                  </h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.node.subtitle || post.node.excerpt,
                    }}
                    itemProp="description"
                  />
                  <h6>Read more...</h6>

                </div>
              </div>
            </Link>

          )
        })}

      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
          edges {
            node {
              title
              subtitle
              author
              date
              slug
                 image {
          fluid {
            src
          }
        }
            }
          }
        }
  }
`