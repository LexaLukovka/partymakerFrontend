const titleSubs = (title) => {
  if (title.length >= 24) {
    return `${title.substring(0, 24)}...`
  }
  return title
}

export default titleSubs
