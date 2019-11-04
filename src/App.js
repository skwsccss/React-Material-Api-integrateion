import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ThemeWrapper, { AppContext } from './theme/ThemeWrapper';

import Login from './pages/Users/Login';
import Register from './pages/Users/Register';
import Reset from './pages/Users/Reset';
import Main from './pages/CRUD/MainPage';
// import Users from './pages/CRUD/Users';
// import UserTip from './pages/CRUD/UserTip';
// import Category from './pages/CRUD/Category';
// import Article from './pages/CRUD/Article';
// import FAQ from './pages/CRUD/FAQ';
// import UserQuestion from './pages/CRUD/UserQuestion';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


class App extends Component {
  render() {
    return (
      <ThemeWrapper>
        <AppContext.Consumer>
          {(changeMode) => (

            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/reset' component={Reset} />
              <Route path='/main' component={Main} />
            </Switch>
          )}
        </AppContext.Consumer>
      </ThemeWrapper>
    );
  }
}

export default App;
