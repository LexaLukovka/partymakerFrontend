/* eslint-disable class-methods-use-this */
import Cache from '../Cache'
import Http from '../Http'

class Party {
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
      address: form.address,
      district: form.district,
      pictures: finishForm.pictures,
      telegramUrl: finishForm.telegramUrl,
      description: form.description,
      peopleMax: form.peopleMax,
      peopleMin: form.peopleMin,
      startTime: form.time,
      privateParty: finishForm.privateParty,
    }

    return Http.post('/party', party)
  }
}

export default new Party()
