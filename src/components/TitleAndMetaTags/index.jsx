import React from 'react'
import Helmet from 'react-helmet'
import sanitizeHtml from 'sanitize-html'

const sanitize = (html) =>
  sanitizeHtml(html, {
    allowedTags: [],
    allowedClasses: [],
  })

const TitleAndMetaTags = ({
  url,
  pathname,
  title,
  siteName,
  location,
  cover,
  description,
  keywords,
}) => (
  <Helmet lang="pt-br">
    <title>
      {title} | {siteName} {location}
    </title>

    <link rel="icon" type="image/png" href="/img/favicon.jpg" />

    <meta property="description" content={sanitize(description)} />
    <meta property="keywords" content={keywords} />

    <meta name="robots" content="index, follow" />

    <meta property="og:url" content={`${url}/${pathname}`} />
    <meta property="og:image" content={cover ? cover : `${url}/social/hero-1.jpg`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={sanitize(description)} />

    <meta name="twitter:url" content={`${url}/${pathname}`} />
    <meta name="twitter:image" content={cover ? cover : `${url}/social/hero-1.jpg`} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={sanitize(description)} />
    <meta name="twitter:site" content="@cabareclub" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@cabareclub" />
  </Helmet>
)

TitleAndMetaTags.defaultProps = {
  url: 'https://cabareclub.com.br',
  pathname: '',
  cover: '',
  siteName: 'Cabare Acompanhantes',
  location: 'SP',
  title: 'Acompanhantes São Paulo',
  description:
    'Cabaret Acompanhantes - As mais lindas acompanhantes de luxo em São Paulo, com perfis entre loiras, morenas, ruivas, negras, orientais e mestiças. Cabaret - Seu Guia do Prazer.',
  keywords:
    'Acompanhante, Acompanhantes, Luxo, Modelos, Escorts Garotas de Programa, São Paulo, SP, cabare, cabaret',
}

export default TitleAndMetaTags
