import React from 'react';
import { withRouter } from 'react-router';

import './custom.scss';

class Button extends React.Component {
    state = {
        first: "",
        last: "",
        password: ""
    }

    render = () => {
        let {children, displayBlock, style} = this.props;
        
        let custom_style = {};
        if(style) {
            custom_style = style;
        }

        if(displayBlock) {
            custom_style.display = 'Block';
        }


        return (
            <button
                style={custom_style}
                className="custom__button"
            >
                {children}
            </button>
        );
    }
}

export default withRouter(Button);