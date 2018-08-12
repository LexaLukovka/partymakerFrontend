/* eslint-disable class-methods-use-this,camelcase */
import Http from 'services/Http'
import qs from 'querystring'
import flatten from 'lodash/flattenDeep'

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
    const shape = {
      title: undefined,
      type: undefined,
      address: {
        address: undefined,
        lng: undefined,
        lat: undefined,
        placeId: undefined,
      },
      district: undefined,
      pictures: undefined,
      telegram_url: undefined,
      description: undefined,
      people_max: undefined,
      people_min: undefined,
      start_time: undefined,
      private_party: undefined,
    }
    return Http.put(`/party/${party_id}`, settings)
  }

  create(form) {
    const party = {
      title: form.title,
      type: form.type,
      address: {
        address: form.address.formatted_address,
        lng: form.address.geometry.location.lng(),
        lat: form.address.geometry.location.lat(),
        placeId: form.address.place_id,
      },
      district: form.district,
      pictures: flatten(form.pictures),
      telegram_url: form.telegram_url,
      description: form.description,
      people_max: form.peopleMax,
      people_min: form.peopleMin,
      start_time: form.startTime,
      private_party: form.private,
    }

    return Http.post('/party', party)
  }
}

export default new Party()
