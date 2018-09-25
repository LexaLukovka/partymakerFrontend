/* eslint-disable class-methods-use-this,camelcase,object-shorthand */
import Http from 'services/Http'
import isEmpty from 'lodash/isEmpty'
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
    return Http.post(`/groups/${group_id}/users`)
  }

  leave(group_id) {
    return Http.delete(`/groups/${group_id}/users/delete`)
  }

  change(group_id, settings) {
    return Http.put(`/groups/${group_id}`, settings)
  }

  delete(group_id) {
    return Http.delete(`/groups/${group_id}`)
  }

  create(form) {
    const place_id = isEmpty(form.place) ? null : form.place.id

    const group = {
      title: form.title,
      place_id,
      address: place_id ? null : {
        address: form.address.formatted_address,
        lng: place_id ? form.address.geometry.location.lng : form.address.geometry.location.lng(),
        lat: place_id ? form.address.geometry.location.lat : form.address.geometry.location.lat(),
        placeId: form.address.place_id,
      },
      description: form.description,
      date: form.date,
      private_party: form.private,
      invite_url: form.invite_url,
    }

    return Http.post('/groups', group)
  }
}

export default new Group()
