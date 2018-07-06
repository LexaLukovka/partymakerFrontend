import isNil from 'lodash/isNil'
import isBoolean from 'lodash/isBoolean'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'

export default function isPrimitive(value) {
  return isNil(value) || isNumber(value) || isBoolean(value) || isString(value) || typeof value === 'symbol'
}
