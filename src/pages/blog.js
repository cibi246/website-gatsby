import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { PageLayout, BlogLink, PageTitle } from '../components'
import { Container, Form, FormControl, FormGroup } from 'react-bootstrap'
import { SEO, Utils } from '../utils'

const MediumBlog = ({ data }) => {
  const [state, setState] = useState({
    filteredData: [],
    query: '',
  })
  const handleChange = (e) => {
    const query = e.target.value
    const filteredData = data.allMediumPost.edges.filter((edge) => {
      const stdQuery = query.toLowerCase()
      return (
        edge.node.content.subtitle.toLowerCase().includes(stdQuery) ||
        edge.node.title.toLowerCase().includes(stdQuery)
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const filteredPosts = query !== '' ? filteredData : data.allMediumPost.edges
  console.log(filteredPosts)
  return (
    <PageLayout>
      <SEO title="Tech Blog" />
      <PageTitle title="Tech Blog" />
      <Container className="px-5 mb-5 text-center">
        <Form className="blog-filter">
          <FormGroup>
            <FormControl
              className="bg-none search"
              type="search"
              placeholder="Search"
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </Container>
      <Container
        fluid
        className="p-4 w-auto text-left d-flex flex-wrap justify-content-center"
      >
        {filteredPosts.map(({ node }) => (
          <div key={node.id} className="p-3">
            {/* <a href=""> */}
            <BlogLink
              to={`https://medium.com/@cibi246/${node.uniqueSlug}`}
              title={node.title}
              subtitle={node.createdAt}
              excerpt={node.content.subtitle}
              target="_blank"
            />
            {/* </a> */}
          </div>
        ))}
      </Container>
    </PageLayout>
  )
}

export const data = graphql`
  query {
    allMediumPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          createdAt(formatString: "DD MMMM YYYY")
          uniqueSlug
          content {
            subtitle
          }
        }
      }
    }
  }
`

export default MediumBlog
