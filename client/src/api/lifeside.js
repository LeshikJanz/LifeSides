// @flow

import type { Lifeside } from '../types/Lifeside'
import { request } from './base'
import handleError from 'utils/handleError'

export default {
  createLifeside (lifeside: Lifeside) {
    return request.post('Lifesides', lifeside)
      .then((lifeside: Lifeside) => lifeside)
  },
  fetchLifesides () {
    return request.get('Lifesides')
      .then((lifesides: Lifeside[]) => lifesides)
      .catch(handleError)
  }
}
