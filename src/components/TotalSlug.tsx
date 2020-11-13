import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"


const TotalSlug = () => {


  const data = useStaticQuery(graphql`
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
)

  const siteTitle = data.site.siteMetadata?.title || `Title`

  const TotalSlug = data.allContentfulPost.edges

    return (
      <div className='totalSlug' >

        {TotalSlug.map((slug: String, i: number) => {
          const title = slug.node.title || slug.node.slug
console.log(slug);

          return (
            <div key={i} className='slug'>
              <Link to={slug.node.slug} itemProp="url">
                <h6 itemProp="headline">{slug.node.slug}</h6>
              </Link>
            </div>
          )
        })}

    </div>
    )
}

export default TotalSlug
