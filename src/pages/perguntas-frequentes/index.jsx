import React from 'react'
import Helmet from 'react-helmet'

import Page from '../../components/Elements/Page'
import { Grid, Row, Col } from '../../components/Elements/Grid'
import Collapse from '../../components/Elements/Collapse/Collapse'

import FAQ_SECTIONS from '../../utils/getFaqSections'
import Layout from '../../components/Layout'

const Faq = () => (
  <Layout>
    <Helmet
      lang="pt-br"
      title="Perguntas Frequentes - Cabaret Acompanhantes SP - Acompanhantes São Paulo"
    />
    <Page className="faq-page">
      <Page.Header>
        <h1 className="text-center">Perguntas Frequentes</h1>
      </Page.Header>
      {FAQ_SECTIONS.map((section, index) => (
        <Collapse
          key={index}
          className="faq-page__section"
          title={section.title}
          list={section.questions}
        />
      ))}
    </Page>
  </Layout>
)

export default Faq
