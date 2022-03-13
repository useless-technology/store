const generateRandomKey = () => Math.random().toString(36).substr(2, 8)

const ActionTypes = {
  INIT: `@store/INIT${generateRandomKey()}`,
  REPLACE: `@store/REPLACE${generateRandomKey()}`
}

export default ActionTypes
