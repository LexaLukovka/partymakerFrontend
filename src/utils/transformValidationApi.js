const transformValidationApi = errors => {
  const objectsArray = errors.map(error => ({ [error.field]: error.message }))
  return objectsArray.reduce(((result, current) => ({ ...result, ...current })))
}
export default transformValidationApi
