import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Elements/Page'
import TitleAndMetaTags from '../components/TitleAndMetaTags'
import { Grid, Row, Col } from '../components/Elements/Grid'
import Button from '../components/Elements/Button'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <Page className="notfound-page">
      <TitleAndMetaTags />
      <Grid>
        <Row componentClass="header" className="justify-content-center">
          <Col md={4} mdOffset={4} sm={6} smOffset={3}>
            <img src="/img/logo.png" alt="Cabaret Acompanhantes de Luxo." />
            <h1>Oops!</h1>
            <h2>Pagina não encontrada</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} mdOffset={4} sm={6} smOffset={3}>
            <p>O anúncio ou página que você procura não está mais no ar ou mudou de endereço.</p>
          </Col>
        </Row>
        <Row componentClass="footer" className="justify-content-center">
          <Col md={4} mdOffset={4} sm={6} smOffset={3}>
            <Link to="/acompanhantes">
              <Button block>
                CONHEÇA AS ACOMPANHANTES <br /> MAIS LINDAS DE SP
              </Button>
            </Link>
          </Col>
        </Row>
      </Grid>
    </Page>
  </Layout>
)

export default NotFoundPage
