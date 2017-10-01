const PROMISE = 'PROMISE';
const LINE_TYPE = 'LINE_TYPE';
import * as Action from '../actions/Results';
import {cableTypeData} from '../actions/Cable';
import {installationData} from '../actions/Install';

const middleware = store => next => action => {
  switch (action.type) {
    case PROMISE:
      let [actionStart, actionSuccess, actionFailure] = action.actions;
      store.dispatch({
        type: actionStart,
        isFetching: true
      });
      action.promise.then(data => {
        store.dispatch({
          type: actionSuccess,
          isFetching: false,
          data: data
        });
      }, (error) => store.dispatch({
        type: actionFailure,
        isFetching: false,
        data: error
      }));
      break;
    case LINE_TYPE:
      store.dispatch(Action.reactanceValue(store.getState().Load.line_type));
      return next(action);
    default:
      return next(action);
  }
};

export default middleware;
