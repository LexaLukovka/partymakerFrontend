/* eslint-disable class-methods-use-this */
import Cache from '../Cache'
import Http from '../Http'

class Party {
  all() {
    return Http.get('/party')
  }

  find(id) {
    return Http.get(`/party/${id}`)
  }

  createIcon(name) {
    Cache.put('icon', name)
    return name
  }

  createForm(form) {
    Cache.put('form', form)
    return form
  }

  createFinish(form) {
    Cache.put('finish', form)
    return form
  }

  createParty() {
    const icon = Cache.get('icon')
    const form = Cache.get('form')
    const finishForm = Cache.get('finish')

    const party = {
      title: form.title,
      type: icon.icon,
      address: {
        address: form.address.formatted_address,
        lng: form.address.geometry.location.lng,
        lat: form.address.geometry.location.lat,
        placeId: form.address.placeId,
      },
      district: form.district,
      pictures: finishForm.pictures,
      telegram_url: finishForm.telegramUrl,
      description: form.description,
      people_max: form.peopleMax,
      people_min: form.peopleMin,
      start_time: form.startTime,
      private_party: finishForm.privateParty,
    }

    return Http.post('/party', party)
  }
}

export default new Party()
