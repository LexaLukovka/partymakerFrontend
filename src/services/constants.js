const urls = {
  frontend: 'https://partymaker.zp.ua',
  backend: 'https://api.partymaker.zp.ua',

}
if (process.env.NODE_ENV === 'development') {
  urls.backend = 'http://localhost:3333'
  urls.frontend = 'http://localhost:2000'
}

export const BACKEND_URL = urls.backend
export const HOST_URL = urls.frontend
