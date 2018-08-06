import React from 'react'
import { Grid, Row, Col } from '../../Elements/Grid'
import Title from '../../Elements/Title';
import Link from 'gatsby-link'

const ResponsiveSection = () => (
  <section className="section landing__join-us">
    <Grid>
      <Row className="justify-content-sm-center">
        <Col md={6} className="text-center">
          <Title type="h2">Interessada em fazer parte do nosso show?</Title>
          <p>
            Você já uma peça única, apenas ainda não faz parte do nosso espetaculo!
          </p>
          <p>
            Anuncie o seu perfil como Acompanhante de Luxo. Inscreve-te já no Cabaré e Aumente a sua Visibilidade!
          </p>
          <Link to="/anuncie/" className="btn btn-lg btn-red"> Anuncie Aqui </Link>
        </Col>
      </Row>
    </Grid>
  </section>
)

export default ResponsiveSection