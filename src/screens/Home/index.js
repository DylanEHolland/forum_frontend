import React from 'react';
import {withRouter} from 'react-router-dom';
import { fetchApiHome } from '../../api/user';

import './custom.scss';

class Home extends React.Component {

    componentDidMount() {
        fetchApiHome()
        .then(
            res => {
                console.log("test:")
            }
        )
    }

    render = () => {
        return (
            <div>
                {/* <LoginSignUp /> */}
            </div>
        );
    }
}

export default withRouter(Home);