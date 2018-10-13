export default (place) => ({
  ...place,
  pictures: place.pictures.map(p => p.url),
})

