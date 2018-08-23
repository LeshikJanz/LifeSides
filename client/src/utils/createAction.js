export function createAction (type: string, payloadMapper: any) {
  function actionCreator (...args) {
    return {
      type,
      payload: payloadMapper ? payloadMapper(...args) : args[0],
    };
  }

  actionCreator.toString = () => type;
  actionCreator.bind({ displayName: type });

  return actionCreator;
}

export const scopedCreator: any = (scopeName) => createAction.bind({ scope: scopeName });
