class ServiceWorker {
  constructor(self) {
    this.self = self
  }

  on(name, callback) {
    this.self.addEventListener(name, callback)
  }
}

export default ServiceWorker
