const devMode = process.env.NODE_ENV === 'development'

const placeholder = 'http://placehold.it/362x536'

const escorts = [
  'Juliana Saad',
  'Kamilinha',
  'Julia Faria',
  'Laila Ribeiro',
  'Athena',
  'Yumi Inoue',
  'Bruna Oliveira',
  'Alice',
]

const photos = [
  'https://confrariars.com.br/wp-content/uploads/2017/12/img_7467-260x350.jpg',
  'https://confrariars.com.br/wp-content/uploads/2017/11/suzy-moraes-capa-260x350.jpg',
  'https://confrariars.com.br/wp-content/uploads/2018/03/amanda-reis-acompanhantes-em-porto-alegre-11-260x350.jpg',
  'https://confrariars.com.br/wp-content/uploads/2018/03/thay-montanaro-01-260x350.jpg',
  'https://confrariars.com.br/wp-content/uploads/2018/02/shay-albani-acompanhante-em-porto-alegre-09-260x350.jpg',
  'https://confrariars.com.br/wp-content/uploads/2018/07/natalia-lins-260x350.jpg',
  'https://confrariars.com.br/wp-content/uploads/2018/04/antonela-ribeiro-01-260x350.jpg',
  'https://confrariars.com.br/wp-content/uploads/2018/05/angelica-brick-acompanhantes-porto-alegre-260x350.jpg',
]

const getProfileName = () => {
  const index = Math.floor(Math.random() * escorts.length)
  return escorts[index]
}

const getProfileUrl = () => {
  if (devMode) return placeholder
  const index = Math.floor(Math.random() * photos.length)
  return photos[index]
}

const getBool = () => !!Math.floor(Math.random() * 2)

const changeCase = name => name.toLowerCase().replace(' ', '-')

export default (amount = 8) => {
  const arr = new Array(amount)
  const mock = []

  for (let i of arr) {
    mock.push(getProfileName())
  }

  return mock.map(name => {
    return {
      name,
      cover: getProfileUrl(),
      hasVideo: getBool(),
      hasWhatsapp: getBool(),
      phone: '(00) 12345-6789',
      url: changeCase(name),
    }
  })
}
