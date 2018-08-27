// @flow
import { request } from './base'

export default {
  createAccount (account: Account) {
    return request.post('Accounts', account)
      .then((account: Account) => account)
  },
  auth (data: { email: string, password: string }) {
    return request.post('Accounts/login', data)
      .then((isAuth: boolean) => isAuth)
  }
}
