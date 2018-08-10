import React from 'react';
import Helmet from 'react-helmet';

const TitleAndMetaTags =({ url, pathname, title, siteName, description, keywords }) => (
  <Helmet lang="pt-br">
    <title>
      {title} | {siteName}
    </title>

    <meta property="description" content={description} />
    <meta property="keywords" content={keywords} />

    <meta name="robots" content="index, follow" />

    <meta property="og:url" content={`${url}/${pathname}`} />
    <meta property="og:image" content={`${url}/social/hero-1.jpg`} />
    <meta property="og:image" content={`${url}/social/hero-2.jpg`} />
    <meta property="og:image" content={`${url}/social/hero-3.jpg`} />
    <meta property="og:image" content={`${url}/social/hero-4.jpg`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    <meta name="twitter:url" content={`${url}/${pathname}`} />
    <meta name="twitter:image" content={`${url}/social/hero-1.jpg`} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="@oidonarita" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@oidonarita" />
  </Helmet>
);

TitleAndMetaTags.defaultProps = {
  url: 'https://cabareclub.com.br',
  pathname: '',
  siteName: 'Cabaret Acompanhantes SP',
  title: 'Acompanhantes São Paulo',
  description: 'Cabaret Acompanhantes - As mais lindas acompanhantes de luxo em São Paulo, com perfis entre loiras, morenas, ruivas, negras, orientais e mestiças. Cabaret - Seu Guia do Prazer.',
  keywords: 'Acompanhante, Acompanhantes, Luxo, Modelos, Escorts Garotas de Programa, São Paulo, SP, cabare, cabaret',
};

export default TitleAndMetaTags;
