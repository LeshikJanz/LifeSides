// @flow

export const HOURS = Array.from({ length: 25 }, (value, key) => ({
  title: ('0' + key).slice(-2),
  value: ('0' + key).slice(-2)
}))

export const MINUTES = Array.from({ length: 60 }, (value, key) => ({
  title: ('0' + key).slice(-2),
  value: ('0' + key).slice(-2)
}))
