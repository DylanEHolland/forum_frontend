import React from 'react';
import {fetchApiHome} from './api';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './custom.scss';

import Home from './screens/Home';

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
                            />
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}