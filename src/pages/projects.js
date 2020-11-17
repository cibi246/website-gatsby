import React from 'react'
import { graphql } from 'gatsby'
import { PageLayout, PageTitle, ProjectLink } from '../components'
import Container from 'react-bootstrap/Container'
import { Utils } from '../utils'

export default ({ data }) => {
  const allProjects = data.allMarkdownRemark.edges || []
  const allFeaturedImages = data.allFile.edges || []
  const regex = /\/[projects].*\/|$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex, true, 3)
  console.log('feature map', featuredImageMap)
  return (
    <PageLayout>
      <PageTitle title="Projects" />
      <Container className="text-left">
        <section>
          {allProjects.map(({ node }) => {
            console.log(node.fields.slug)
            return (
              <div className="pt-3 pr-2 pl-2">
                <ProjectLink
                  to={node.fields.slug}
                  featuredImages={featuredImageMap[node.fields.slug]}
                  title={node.frontmatter.title}
                  tags={node.frontmatter.tags}
                  excerpt={node.excerpt}
                  website={node.frontmatter.websiteLink}
                  github={node.frontmatter.githubLink}
                />
                <hr />
              </div>
            )
          })}
        </section>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            description
            tags
            date(formatString: "DD MMMM, YYYY")
            websiteLink
            githubLink
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "png" }
        relativePath: { regex: "/feature/" }
        relativeDirectory: { regex: "/content/projects/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`
