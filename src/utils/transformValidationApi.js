const transformValidationApi = errors => {

  if (errors?.message) return { non_field_error: errors.message }
  const objectsArray = errors.map(error => ({ [error.field]: error.message }))

  return objectsArray.reduce((result, current) => ({ ...result, ...current }))
}
export default transformValidationApi
