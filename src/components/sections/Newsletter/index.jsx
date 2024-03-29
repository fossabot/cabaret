import React from 'react'
import { Grid, Row, Col } from '../../Elements/Grid'
import { NewsletterForm } from '../../Forms/NewsletterForm';

const NewsletterSection = () => (
  <section className="landing__newsletter-section">
    <Grid>
      <Row className="justify-content-end">
        <Col md={6} lg={4}>
            <h2>Fique por dentro</h2>
            <p>Fique atualizado sobre nossas informações, promoções e sobre as melhores modelos!</p>
            <NewsletterForm />
        </Col>
      </Row>
    </Grid>
  </section>
)

export default NewsletterSection
