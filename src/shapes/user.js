import { number, shape, string } from 'prop-types'

export default shape({
  id: number.isRequired,
  name: string.isRequired,
  email: string.isRequired,
  phone: string,
  pivot: shape({
    is_online: number.isRequired,
    last_seen: string,
  })
})
