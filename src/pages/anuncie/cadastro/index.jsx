import React from 'react'
import { Grid, Row, Col } from '../../../components/Elements/Grid'
import Page from '../../../components/Elements/Page/Page'
import TitleAndMetaTags from '../../../components/TitleAndMetaTags'
import { JoinForm } from '../../../components/Forms/JoinUsForm'
import Layout from '../../../components/Layout'

const JoinUs = () => (
  <Layout>
    <Page className="join-us-page">
      <TitleAndMetaTags title="Cadastro de Acompanhante" />

      <Grid>
        <Row className="justify-content-sm-center">
          <Col md={8}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScr-R-ZmJIPW54tkH5G6PWldVdVyiFxLkEMONhkVO9ixqm9nw/viewform?embedded=true"
              width="100%"
              height="1200"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            />
          </Col>
        </Row>
      </Grid>

      {/*<Grid>
      <Row className="justify-content-sm-center">
      <Col md={6}>

          <Page.Header title={'Cadastro de Acompanhante'} />
          <p>Olá querida anunciante!</p>

          <p>Este formulário contém todas informações para cadastro de acompanhantes no site www.private55.com.</p>

          <p>Embora nem todos os campos sejam obrigatórios, é de extrema importância que ele seja completo e correto para a qualificação de seu anúncio.</p>

          <p>Em relação as suas informações pessoais, não se preocupe, pois temos o compromisso de sigilo e proteção total destas informações.</p>

          <p>Para agilizar seu atendimento, preencha seu cadastro e nos chame em um de nossos canais:</p>

          <p>Preencha os campos abaixo ou vá até o fim da página para entrar em contato conosco.</p>

          <JoinForm />

        </Col>

        <Col md={8}>
          <div className="join-us-page__box">
            <h4>Cadastro de Acompanhante e Atendimento às Anunciantes</h4>
            <p>
              Primeiramente leia e aceite nossos termos, depois você poderá fazer o cadastro de acompanhante pelo formulário acima.
              Caso tenha dificuldade em criar seu perfil, entre em contato conosco
            </p>
            <p>Nosso atendimento comercial funciona de segunda à sexta das 10h30 às 17h30.</p>

            <strong>Os canais de contato são:</strong>
            <p><a href="#">Clique aqui e envie um Whatsapp agora mesmo.</a></p>
            <p><strong>Fone:</strong> (11) 98888.0000 (apenas WhatsApp)</p>
            <p><strong>E-mail:</strong> <a href="#">test@test.com</a></p>

            <p>Portanto se você já é uma acompanhante de luxo em sua cidade e quer ter mais visibilidade através de nosso sistema de geolocalização.</p>

            <p>Não perca mais tempo, venha nos procurar e faça parte de nossa rede social de acompanhantes reais.</p>

            <p>Agradecemos sua visita e interesse em estar aqui.</p>
          </div>
        </Col>
      </Row>
    </Grid>*/}
    </Page>
  </Layout>
)

export default JoinUs
