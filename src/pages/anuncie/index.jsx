import React from 'react';
import Link from 'gatsby-link';
import { Grid, Row, Col } from '../../components/Elements/Grid';
import Page from '../../components/Elements/Page/Page';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';
import Icon from '../../components/Elements/Icon/Icon';


const JoinUs = () => (
  <Page className="join-us-page">
    <TitleAndMetaTags title="Anuncie" />
    <Grid>
      <Row className="justify-content-sm-center">
        <Col md={10} lg={6}>
          <Page.Header title={'Faça parte do nosso show!'} />
          <p><strong>Interessada em anunciar como Acompanhante de Luxo?</strong></p>
          <p>Você já possui um talento e beleza únicos, apenas ainda não faz parte do nosso club.</p>

          <p>Tenha seu Anúncio Grátis durante 6 meses!</p>

          <p>Tenha seu Anúncio Grátis durante 1 ano!</p>

          <p>
            <a href="#">
              <Icon
                name="whatsapp"
              /> Clique aqui e envie um Whatsapp agora mesmo.
            </a>
          </p>
        </Col>

        <Col className="join-us-page__box" md={8}>
          <h2 className="text-center">O que você precisa para anunciar?</h2>
          <ol>
            <li>Ser maior de 18 anos. <br /> <small>(Cópia do RG ou CNH necessárias)</small></li>
            <li>Preecher o formulário de cadastro <Link to={'/anuncie/cadastro'}>aqui</Link>.</li>
            <li>Número de telefone (WhatsApp)</li>
            <li>Aguardar o contato de nossa equipe.</li>
            <li>
              Possuir material fotográfico (6 fotos mínimas)
            </li>
            <li>Se precisar, nós ocultamos ou embaçamos seu rosto ou tatuagens nas fotos.</li>
          </ol>
        </Col>
      </Row>
    </Grid>
  </Page>
)

export default JoinUs
