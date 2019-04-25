import { number, shape, string } from 'prop-types'

export default shape({
  user_id: number.isRequired,
  email: string,
})
