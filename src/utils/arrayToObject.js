export default (array) => array.reduce((obj, item) => {
  obj[item.id] = item
  return obj
}, {})
