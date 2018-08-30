// @flow

import { NotificationManager } from 'react-notifications';

const handleError = (error: Error) => {
  if (typeof error === "string") {
    return NotificationManager.error(error, '', 5000)
  }
  if (error && typeof error.error === "string") {
    return NotificationManager.error(error.error, '', 5000)
  }
  if (error && error.error && typeof error.error.message === "string") {
    return NotificationManager.error(error.error.message, '', 5000)
  }
}

export default handleError
