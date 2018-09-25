const shortTitle = (descriptions) => {
  if (descriptions.length >= 100) {
    return `${descriptions.substring(0, 100)}...`
  }
  return descriptions
}

export default shortTitle
