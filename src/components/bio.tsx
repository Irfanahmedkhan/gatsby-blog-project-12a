import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
const style = require('./bio.module.css');


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className={style.bio}>
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className={style.bioAvatar}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <>
          <h6>{author.name}<br />
            <p>{author?.summary || null}</p>
          </h6> 
        
        </>
      )}
    </div>
  )
}

export default Bio
