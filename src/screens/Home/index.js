import React from 'react';
import {withRouter} from 'react-router-dom';

import './custom.scss';

import LoginSignUp from "../../components/LoginSignUp";

class Home extends React.Component {
    render = () => {
        return (
            <div>
                <LoginSignUp />
            </div>
        );
    }
}

export default withRouter(Home);