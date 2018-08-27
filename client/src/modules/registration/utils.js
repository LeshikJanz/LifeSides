// @flow

// null - means not fully filled
export const isPasswordsSame = (pass1: string, pass2: string) => {
  if (pass1 && pass2) {
    return pass1 === pass2
  }
  return null
}
