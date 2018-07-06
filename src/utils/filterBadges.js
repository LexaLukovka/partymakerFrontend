const filterBadges = (badges, selected) => badges.filter((obj) => {
  const key = Object.keys(obj)[0]
  return !selected.includes(key)
})

export default filterBadges
