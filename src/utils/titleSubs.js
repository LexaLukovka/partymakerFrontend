const titleSubs = (title) => {
  if (title.length >= 20) {
    return `${title.substring(0, 20)}...`
  }
  return title
}

export default titleSubs
