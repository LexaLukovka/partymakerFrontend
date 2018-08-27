/* eslint-disable class-methods-use-this,camelcase,object-shorthand */
import Http from 'services/Http'
import qs from 'querystring'
import flatten from 'lodash/flattenDeep'
import isEmpty from 'lodash/isEmpty'

class Party {
  all(searchParams) {
    return Http.get(`/party?${qs.stringify(searchParams)}`)
  }

  find(party_id) {
    return Http.get(`/party/${party_id}`)
  }

  isMember(party_id) {
    return Http.get(`/party/${party_id}/users/isMember`)
  }

  users(party_id) {
    return Http.get(`/party/${party_id}/users`)
  }

  join(party_id) {
    return Http.post(`/party/${party_id}/users`)
  }

  leave(party_id) {
    return Http.delete(`/party/${party_id}/users/delete`)
  }

  change(party_id, settings) {
    return Http.put(`/party/${party_id}`, settings)
  }

  delete(party_id) {
    return Http.delete(`/party/${party_id}`)
  }

  create(form) {
    const place_id = isEmpty(form.place) ? null : form.place.id

    const party = {
      title: form.title,
      type: form.type,
      place_id: place_id,
      address: place_id ? null : {
        address: form.address.formatted_address,
        lng: place_id ? form.address.geometry.location.lng : form.address.geometry.location.lng(),
        lat: place_id ? form.address.geometry.location.lat : form.address.geometry.location.lat(),
        district: form.district,
        placeId: form.address.place_id,
      },
      pictures: flatten(form.pictures),
      telegram_url: form.telegram_url,
      description: form.description,
      people_max: form.peopleMax,
      people_min: form.peopleMin,
      start_time: form.startTime,
      private_party: form.private,
      invite_url: form.invite_url,
    }

    return Http.post('/party', party)
  }
}

export default new Party()
