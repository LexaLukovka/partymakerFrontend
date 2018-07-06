/* eslint-disable class-methods-use-this */
class Cache {
  has(name) {
    return localStorage.getItem(`cache-${name}`) !== null
  }

  get(name) {
    return JSON.parse(localStorage.getItem(`cache-${name}`))
  }

  put(name, value) {
    localStorage.setItem(`cache-${name}`, JSON.stringify(value))
  }

  remove(name) {
    localStorage.removeItem(`cache-${name}`)
    return name
  }
}

export default new Cache()
