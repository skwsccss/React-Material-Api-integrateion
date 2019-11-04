import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ThemeWrapper, { AppContext } from '../../theme/ThemeWrapper';
import Nav from '../Nav/Nav';
import Tip from './Tip';
import Users from './Users';
import UserTip from './UserTip';
import Category from './Category';
import Article from './Article';
import FAQ from './FAQ';
import UserQuestion from './UserQuestion';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


class Main extends Component {
    render() {
        const {changeMode, history} = this.props;
        return (
            <ThemeWrapper>
                <AppContext.Consumer>
                    {() => (
                        <Nav history={history} changeMode={changeMode}>
                            <Switch>
                                <Route path='/main/tip' component={Tip} />
                                <Route path='/main/users' component={Users} />
                                <Route path='/main/user-tip' component={UserTip} />
                                <Route path='/main/category' component={Category} />
                                <Route path='/main/article' component={Article} />
                                <Route path='/main/FAQ' component={FAQ} />
                                <Route path='/main/User-Question' component={UserQuestion} />

                            </Switch>
                        </Nav>
                    )}
                </AppContext.Consumer>
            </ThemeWrapper>
        );
    }
}

export default Main;
