import React from 'react';
import {fetchApiHome} from './api/user';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './custom.scss';

import Home from './screens/Home';
import SignUp from './screens/SignUp';

export default class App extends React.Component {
    componentDidMount() {
        fetchApiHome()
        .then(
            res => {
                console.log(res);
            }
        )
    }

    render = () => {
        return (
            <div className="app">                
                <div className="main__frame">
                    <Router>
                        <Switch>
                            <Route 
                                path="/"
                                component={Home}
                                exact
                            />
                            <Route 
                                path="/login"
                                component={SignUp}
                            />

                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}