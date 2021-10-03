import React from 'react';
import { withRouter } from 'react-router';
import LoginSignUp from '../../components/LoginSignUp';
import './custom.scss';

class SignUp extends React.Component {
    render = () => {
        return <LoginSignUp />;
    }
}

export default withRouter(SignUp);