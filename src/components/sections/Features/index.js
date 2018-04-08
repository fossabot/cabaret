import React from 'react'
import { Grid, Row, Col } from '../../Elements/Grid'
import Title from '../../Elements/Title'

const ResponsiveSection = () => (
  <section className="landing__main-section features">
    <Grid>
      <Row>
        <Col md={6}>
          <div className="d-none d-md-block">
            <Title type="h2">Bem vindo ao Club</Title>
          </div>
          <div className="d-block d-md-none text-center">
            <Title type="h2">Bem vindo ao Club</Title>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque aut quod dolores autem magni maxime laudantium animi, sint vero sit. Dignissimos porro veritatis eum facere numquam illo, voluptates laboriosam nulla!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt corporis laborum accusamus ratione nobis? Nisi ut optio fugit non dolorum.</p>
        </Col>
        <Col md={6} sm={12}>
          <div className="d-flex align-items-center feature-info">
            <img
              src="https://placehold.it/75x75"
              alt="..."
              width="75"
              height="75"
              className="feature-info__img rounded-circle"
            />
            <p className="list-group-item-heading pl-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi laborum quisquam, consequatur esse hic blanditiis.
            </p>
          </div>
          <div className="d-flex align-items-center feature-info">
            <img
              src="https://placehold.it/75x75"
              alt="..."
              width="75"
              height="75"
              className="feature-info__img rounded-circle"
            />
            <p className="list-group-item-heading pl-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi laborum quisquam, consequatur esse hic blanditiis.
            </p>
          </div>
          <div className="d-flex align-items-center feature-info">
            <img
              src="https://placehold.it/75x75"
              alt="..."
              width="75"
              height="75"
              className="feature-info__img rounded-circle"
            />
            <p className="list-group-item-heading pl-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi laborum quisquam, consequatur esse hic blanditiis.
            </p>
          </div>
        </Col>
      </Row>
    </Grid>
  </section>
)

export default ResponsiveSection
