const titleSubs = (title) => {
  if (title.length >= 8) {
    return `${title.substring(0, 8)}...`
  }
  return title
}

export default titleSubs
