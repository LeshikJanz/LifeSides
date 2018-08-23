module.exports = {
  extends: ['umbrellio', 'umbrellio/react', 'umbrellio/jest', 'umbrellio/flow'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    serviceworker: true,
    jquery: true,
  },
  globals: {
    Routes: true,
    I18n: true,
    Generator: true,
    IntersectionObserver: true,

    // Flow
    Class: true,
    SyntheticEvent: true,
    TimeoutID: true,
    IntervalID: true,

    // custom
    popup: true,
  },
  rules: {
    'no-buffer-constructor': 0,
    'switch-colon-spacing': 0,
    'new-cap': 0,
  }
}
