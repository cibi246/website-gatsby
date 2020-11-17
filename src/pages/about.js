import React from 'react'
import { PageLayout } from '../components'
import { Container } from 'react-bootstrap'
import { Link, graphql } from 'gatsby'

export default ({ data }) => {
  //   const MediaLink = ({ title, author, link }) => (
  //     <li key={title} style={{ color: 'gray' }}>
  //       <a rel="noopener noreferrer" href={link} target="_blank">
  //         {title}
  //       </a>
  //       &nbsp;-<i>{author}</i>
  //     </li>
  //   )

  const {
    author,
    occupation,
    designations,
    unemployed,
  } = data.site.siteMetadata

  return (
    <PageLayout>
      {/* <PageTitle title="About Me" /> */}
      <Container>
        <article className="w-75 m-auto pt-2 text-left about-container">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <div className="mt-4 pt2">
            <p>
              <strong>{`${author}`}</strong> is a<strong> {occupation}</strong>{' '}
              focused on Full-Stack Development. He use his work experiences and{' '}
              <Link to="/resume">Udemy Courses</Link> to get started, then
              applied his knowledge to build real-world projects.
              <br />
              <br />
              <br />
              Professional strengths include creative problem-solving, written
              and verbal communication and time management. Ready to take
              initiative in difficult situations, and always strive to improve
              the product and bring new ideas.
            </p>
            <br />
            <p>
              Passionate about music, books, travelling and learning new things!
            </p>
            <div className="pt-2">
              <h4>Skills:</h4>
              <p>
                <strong>Languages:</strong> JavaScript(ES5, ES6+), Angular 2+
                versions, HTML, CSS, Java, JEE, RestFul Webservices, SQL
              </p>
              <p>
                <strong>Frameworks/Libraries:</strong> React.js, Gatsby.js,
                webpack, npm
              </p>
              <p>
                <strong>Version Control:</strong> Git
              </p>
            </div>
          </div>
          <p>
            Checkout out Mani's <Link to="/projects">personal projects</Link> to
            see what he's been upto!
            {/* Or checkout my <Link to="/blog">blog</Link> to
            see what's recently caught my eye! */}
          </p>
        </article>
        <article className="w-75 m-auto pb-4 about-container">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed mt-3">
                <small>
                  <strong>
                    Currently looking for new life-changing opportunities
                  </strong>
                  ! If you like what you <Link to="/resume">see</Link>, let's
                  get in&nbsp;
                  <a
                    href="mailto:manivannan.baski@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
      }
    }
  }
`
