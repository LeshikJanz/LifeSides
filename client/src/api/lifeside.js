// @flow

import type { Account } from 'types/Account'
import type { Lifeside } from '../types/Lifeside'
import { request } from './base'

export default {
  createLifeside (lifeside: Lifeside) {
    return request.post('Lifesides', lifeside)
      .then((lifeside: Lifeside) => lifeside)
  },
}
