import React from 'react'
import { graphql } from 'gatsby'
import { PageLayout } from '../components'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  return (
    <PageLayout>
      <Container className="text-center pt-3" fluid>
        <Container className="py-0 my-0">
          <h1 style={{ fontSize: '5rem', color: 'black' }}>
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          {unemployed && (
            <p className="mt-2">
              <b>
                Hello! I am actively looking for new life-changing opportunities
                :)
              </b>
            </p>
          )}
          <p>
            <i>{occupation} experienced in Front-end Development, &nbsp;</i>
            <br />
            <i>
              I'm a self-motivated and well organized person, quick thinking and
              eager to learn.
            </i>
          </p>
          <p>
            <i>Highly skilled in web development technologies</i>
            <br />
            <strong>
              Javascript(ES5, ES6), HTML, CSS, React.js, Angular, Java, JEE,
              Microservices and SQL
            </strong>
          </p>
        </Container>
      </Container>
      <hr className="my-4 w-25" />
      <div className="d-md-inline-flex icons-container">
        <a
          href="https://www.github.com/cibi246"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab', 'github']}
            className="icons github"
            title="Github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/manivannan-baskaran-5848064b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab', 'linkedin']}
            className="icons linkedin"
            title="LinkedIn"
          />
        </a>
        <a
          href="mailto:manivannan.baski@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fas', 'envelope']}
            className="icons mail"
            title="e-mail"
          />
        </a>
      </div>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
