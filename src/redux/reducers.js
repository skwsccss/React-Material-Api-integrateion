import { reducer as form } from "redux-form/immutable";
import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router/immutable";
import history from '../utils/history';

import uiReducer from './modules/ui';
import treeTable from './modules/treeTable';
import crudTable from './modules/crudTable';
import crudTableForm from './modules/crudTableForm';
import login from './modules/login';
import initval from './modules/initForm';
// import socmed from './modules/socialMedia';
// import ecommerce from './modules/ecommerce';
// import contact from './modules/contact';
// import chat from './modules/chat';
// import email from './modules/email';
// import calendar from './modules/calendar';
// import taskboard from './modules/taskboard';
// import languageProviderReducer from 'containers/LanguageProvider/reducer';

/**
 * Branching reducers to use one reducer for many components
 */

function branchReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { branch } = action;
    const isInitializationCall = state === undefined;
    if (branch !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    form,
    ui: uiReducer,
    login,
    treeTableArrow: branchReducer(treeTable, 'treeTableArrow'),
    treeTablePM: branchReducer(treeTable, 'treeTablePM'),
    Tip: branchReducer(crudTable, 'Tip'),
    crudTableForm,
    crudTbFrmDemo: branchReducer(crudTableForm, 'crudTbFrmDemo'),
    initval,
    //   socmed,
    //   calendar,
    //   ecommerce,
    //   contact,
    //   chat,
    //   email,
    //   taskboard,
    //   language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}


