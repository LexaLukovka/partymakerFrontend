import { arrayOf, number, shape, string } from 'prop-types'
import userShape from './user'
import messageShape from './message'
import placeShape from './place'

export default shape({
  id: number.isRequired,
  title: string.isRequired,
  place_id: number,
  date: string,
  guests_ids: arrayOf(number).isRequired,
  place: placeShape,
  guests: arrayOf(userShape),
  messages: arrayOf(messageShape),
  totalMessages: number,
  created_at: string.isRequired,
  updated_at: string.isRequired,
})
