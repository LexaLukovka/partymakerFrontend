/* eslint-disable class-methods-use-this,camelcase,object-shorthand */
import Http from 'services/Http'
import qs from 'querystring'

class Group {
  all(searchParams) {
    return Http.get(`/groups?${qs.stringify(searchParams)}`)
  }

  find(group_id) {
    return Http.get(`/groups/${group_id}`)
  }

  isMember(group_id) {
    return Http.get(`/groups/${group_id}/users/isMember`)
  }

  users(group_id) {
    return Http.get(`/groups/${group_id}/members`)
  }

  join(group_id) {
    return Http.post(`/groups/${group_id}/members`)
  }

  leave(group_id, user_id) {
    return Http.delete(`/groups/${group_id}/members/${user_id}`)
  }

  change(group_id, settings) {
    return Http.put(`/groups/${group_id}`, settings)
  }

  delete(group_id) {
    return Http.delete(`/groups/${group_id}`)
  }

  create(form) {
    return Http.post('/groups', form)
  }
}

export default new Group()
