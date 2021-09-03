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
        let {children, displayBlock, style, onClick} = this.props;
        
        if(!style) {
            style = {};
        } else {
            style = Object(style);
        }

        if(displayBlock) {
            style.display = 'Block';
        }


        return (
            <button
                style={style}
                className="custom__button"
                onClick={
                    () => {
                        if(onClick) {
                            onClick();
                        }
                    }
                }
            >
                {children}
            </button>
        );
    }
}

export default withRouter(Button);