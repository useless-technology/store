// @ts-check

const generateRandomKey = () => Math.random().toString(36).substring(2, 10)

export const ActionTypes = {
  INIT: `@store/INIT${generateRandomKey()}`,
  REPLACE: `@store/REPLACE${generateRandomKey()}`
}
