// @flow

const isNumericInputValue = (value: string) => /(?:^$|^[0-9]+$)/.test(value)

export default isNumericInputValue
