
const urls = {
  frontend: 'http://partymaker.zp.ua',
  backend: 'http://partymaker.cf:8443',

}
if (process.env.NODE_ENV === 'development') {
  urls.backend = 'http://localhost:3333'
  urls.frontend = 'http://localhost:2000'
}

export const BACKEND_URL = urls.backend
export const HOST_URL = urls.frontend
