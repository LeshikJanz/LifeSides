// @flow

// null - means not fully filled
export const isPasswordsSame = (pass1, pass2) => {
  if (pass1 && pass2) {
    return pass1 === pass2
  }
  return null
}
