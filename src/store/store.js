const PLUS = 'PLUS';
const MINUS = 'MINUS';

const updateState = (state, action) => {
  if (action.type === 'PLUS') {
    return { ...state, count: state.count + action.payload };
  }
  if (action.type === 'MINUS') {
    return { ...state, count: state.count - action.payload };
  }
  return state;
};

class Store {
  constructor(updateState, state) {
    this._updateState = updateState;
    this._state = state;
    this._callBack = [];
  }

  getState = () => {
    this._state;
  };

  dispatch = (action) => {
    this._state = this._updateState(this._state, action);
  };

  subscribe = (callBack) => {
    this._callBack.push(callBack);
  };
}

const initState = {
  count: 0,
};

const store = new Store(updateState, initState);

store.subscribe(() => console.log('subcribe', store.getState()));

const { dispatch } = store;

const bindActionCreator =
  (creator, dispatch) =>
  (...args) => {
    dispatch(creator(...args));
  };

const plusAction = (payload) => ({ type: PLUS, payload });
const minusAction = (payload) => ({ type: MINUS, payload });

const plus = bindActionCreator(plusAction, dispatch);
const minus = bindActionCreator(minusAction, dispatch);
