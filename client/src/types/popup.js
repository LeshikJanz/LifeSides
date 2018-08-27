// @flow

export type Popup = {
  hide: () => Promise<any>,
  isCloseOnOverlayForbidden: boolean,
}
