import { number, shape, string } from 'prop-types'

export default shape({
  id: number.isRequired,
  headline: string.isRequired,
  preposition: string.isRequired,
  title: string.isRequired,
  address: string.isRequired,
  datetime: string.isRequired,
  background_url: string.isRequired,
  created_at: string.isRequired,
  updated_at: string.isRequired,
})
