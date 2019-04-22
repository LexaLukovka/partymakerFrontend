import { number, shape, string } from 'prop-types'

export default shape({
  id: number.isRequired,
  text: string.isRequired,
  asset_id: number,
  created_at: string.isRequired,
  updated_at: string.isRequired,
})
