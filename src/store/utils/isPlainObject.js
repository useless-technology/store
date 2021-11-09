/**
 * protype.protype === prototype ? true : false
 * @param {*} obj
 * @returns
 */
const isPlainObject = obj => {
  /**
   * type check
   */
  let proto = obj
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(obj) === proto
}

export default isPlainObject
