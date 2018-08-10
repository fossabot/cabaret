import React from 'react'
import { Grid, Row, Col } from '../../Elements/Grid'
import Title from '../../Elements/Title'

const AboutSection = () => (
  <section className="landing__about-section">
    <Grid>
      <Row>
        <Col md={6}>
          <div className="d-none d-md-block">
            <Title type="h2">Nosso Show: <br/> O Melhor Entretenimento Adulto</Title>
          </div>
          <div className="d-block d-md-none text-center">
            <Title type="h2">Nosso Show: <br/> O Melhor Entretenimento Adulto</Title>
          </div>
          <p>O que o Cabaré e São Paulo, têm a ver?</p>
          <p>
            Tudo! São Paulo é a cidade mais atraente e sedutora do Brasil, que nos proporciona um leque de infinitas possibilidades de Lazer e de Prazer.
          </p>
          <p>Na sua poesia urbana, figuram as mais lindas <strong>Acompanhantes de Luxo</strong> o contraste da Bela e a Fera, na sua selva de concreto. Por vezes cruel e impiedosa, outrora, acolhedora e sedutora.</p>
          <p>
            Nossa missão é simples, queremos apresentar as melhores acompanhantes de luxo do Brasil. Para tornar isso real, o Cabaré está presente do norte ao sul do país, mantendo a seleção criteriosa para encontrar as acompanhantes de luxo de mais alto nível de cada região.
          </p>
        </Col>
      </Row>
    </Grid>
  </section>
)

export default AboutSection
