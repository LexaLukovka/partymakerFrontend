/* eslint-disable class-methods-use-this */
import Http from 'services/Http'
import flatten from 'lodash/flattenDeep'

class Party {
  all() {
    return Http.get('/party')
  }

  userParty(id) {
    return Http.get(`/user/${id}/parties`)
  }

  find(id) {
    return Http.get(`/party/${id}`)
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
