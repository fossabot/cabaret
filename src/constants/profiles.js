import { env } from 'process'

const IS_PRODUCTION = env.NODE_ENV === 'production'

const makeProfile = ({ name, cover, options = {} }) => {
  return {
    name,
    cover: IS_PRODUCTION ? cover : 'http://placehold.it/362x536',
    isVip: options.isVip || false,
    hasVideo: options.hasVideo || false,
    hasWhatsapp: options.hasWhatsapp || false,
    phone: options.phone || '(00) 12345-6789',
    url: 'sofia-orlovisky',
  }
}

const profiles = []

profiles.push(
  makeProfile({
    name: 'Juliana Saad',
    cover: 'https://confrariars.com.br/wp-content/uploads/2018/05/tamy-azevedo-01-260x350.jpg',
    options: { hasVideo: true },
  })
)
profiles.push(
  makeProfile({
    name: 'Kamilinha',
    cover:
      'https://confrariars.com.br/wp-content/uploads/2016/12/lavinia-vasquez-acompanhante-em-porto-alegrecapa-260x350.jpg',
    options: { isVip: true, hasWhatsapp: true },
  })
)
profiles.push(
  makeProfile({
    name: 'Julia Faria',
    cover: 'https://confrariars.com.br/wp-content/uploads/2017/12/img_7467-260x350.jpg',
    options: { hasWhatsapp: true },
  })
)
profiles.push(
  makeProfile({
    name: 'Laila Ribeiro',
    cover: 'https://confrariars.com.br/wp-content/uploads/2017/11/suzy-moraes-capa-260x350.jpg',
    options: {},
  })
)
profiles.push(
  makeProfile({
    name: 'Athena',
    cover:
      'https://confrariars.com.br/wp-content/uploads/2018/05/angelica-brick-acompanhantes-porto-alegre-260x350.jpg',
    options: { hasWhatsapp: true },
  })
)
profiles.push(
  makeProfile({
    name: 'Yumi Inoue',
    cover: 'https://confrariars.com.br/wp-content/uploads/2018/03/thay-montanaro-01-260x350.jpg',
    options: {},
  })
)

profiles.push(
  makeProfile({
    name: 'Alice',
    cover: 'https://confrariars.com.br/wp-content/uploads/2018/07/natalia-lins-260x350.jpg',
    options: { isVip: true, hasWhatsapp: true, hasVideo: true },
  })
)
profiles.push(
  makeProfile({
    name: 'Sabrina',
    cover: 'https://confrariars.com.br/wp-content/uploads/2018/04/antonela-ribeiro-01-260x350.jpg',
    options: { isVip: true, hasVideo: true },
  })
)
profiles.push(
  makeProfile({
    name: 'Bruna Oliveira',
    cover:
      'https://confrariars.com.br/wp-content/uploads/2018/02/shay-albani-acompanhante-em-porto-alegre-09-260x350.jpg',
    options: { hasWhatsapp: true },
  })
)
profiles.push(
  makeProfile({
    name: 'Monica',
    cover: 'https://confrariars.com.br/wp-content/uploads/2017/07/img-6454-260x350.jpg',
    options: { hasVideo: true, hasWhatsapp: true, isVip: true },
  })
)
profiles.push(
  makeProfile({
    name: 'Jessica',
    cover: 'https://confrariars.com.br/wp-content/uploads/2018/02/bruninha-brasilia-01-260x350.jpg',
    options: { isVip: true, hasWhatsapp: true },
  })
)
profiles.push(
  makeProfile({
    name: 'Amanda',
    cover:
      'https://confrariars.com.br/wp-content/uploads/2018/03/amanda-reis-acompanhantes-em-porto-alegre-11-260x350.jpg',
    options: { isVip: true },
  })
)

export const getProfiles = (size = null) => {
  if (!size) {
    return profiles
  }
  return profiles.filter((item, i) => i < size)
}

export const getVipOnly = (size = null) => {
  return getProfiles(size).filter((item) => item.isVip === true)
}

export const getFeatured = (size = null) => {
  return getVipOnly(size).sort(() => 0.5 - Math.random())
}
