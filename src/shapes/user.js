import { number, shape, string } from 'prop-types'

export default shape({
  id: number.isRequired,
  name: string.isRequired,
  email: string.isRequired,
})
