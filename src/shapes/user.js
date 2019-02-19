import { shape, string } from 'prop-types'

export default shape({
  id: string.isRequired,
  name: string.isRequired,
  email: string.isRequired,
})
