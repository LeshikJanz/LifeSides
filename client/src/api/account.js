// @flow
import { request } from './base'

export default {
  createAccount (account: number) {
    console.log("account")
    console.log(account)
    return request.post('Accounts', account)
      .then(res => {
        console.log("res")
        console.log(res)
        return res
      })
  }
}
