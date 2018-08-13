/* eslint-disable */
const isProduction = () => process.env.NODE_ENV !== 'development'

const multipleValuesBool = (
  val = null,
  options = { truthy: 'Sim', falsy: 'Não', default: 'Talvez?' }
) => {
  switch (val) {
    case true:
      return options.truthy
    case false:
      return options.falsy
    default:
      return options.default
  }
}

export { isProduction, multipleValuesBool }
