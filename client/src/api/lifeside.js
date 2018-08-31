// @flow

import type { Lifeside } from '../types/Lifeside'
import { request } from './base'
import handleError from 'utils/handleError'

export default {
  createLifeside (lifeside: Lifeside) {
    const accountId = localStorage.getItem("accountId")
    return request.post(`Accounts/${accountId}/Lifesides`, lifeside)
      .then((lifeside: Lifeside) => lifeside)
  },
  fetchLifesides () {
    const accountId = localStorage.getItem("accountId")
    return request.get(`Accounts/${accountId}/Lifesides`)
      .then((lifesides: Lifeside[]) => lifesides)
  },
  fetchLifesideById (lifesideId: string) {
    return request.get(`Lifesides/${lifesideId}?filter={"include": "habits"}`)
      .then((lifeside: Lifeside) => lifeside)
  }
}
