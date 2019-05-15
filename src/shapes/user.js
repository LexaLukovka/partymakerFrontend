import { bool, number, oneOfType, shape, string } from 'prop-types'

export default shape({
  id: number.isRequired,
  name: string.isRequired,
  email: string.isRequired,
  phone: string,
  is_online: oneOfType([bool, number]),
})
