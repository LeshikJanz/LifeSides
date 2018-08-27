// @flow

export type Account = {
  id: string,
  avatar: string,
  phone: string,
  phoneVeified: boolean,
  notificationHour: number,
  notificationMinute: number,
  realm?: string,
  username: string,
  email: string,
  emailVerified: boolean,
}
