import React from 'react';
import { withRouter } from 'react-router';

import './custom.scss';

class Input extends React.Component {
    render = () => {
        let {password, placeholder, displayBlock} = this.props;

        let style = {}

        if(displayBlock) {
            style.display = 'block';
        }

        return (
            <input 
                className="custom__input"
                placeholder={placeholder}
                style={style}
                type={password ? "password" : "text"}
            />
        );
    }
}

export default withRouter(Input);