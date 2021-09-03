import React from 'react';
import { withRouter } from 'react-router';

import './custom.scss';

class Input extends React.Component {
    render = () => {
        let {password, placeholder, displayBlock, style, onChange} = this.props;

        if(!style) {
            style = {};
        } else {
            style = Object(style);
        }

        if(displayBlock) {
            style.display = 'Block';
        }

        return (
            <input 
                className="custom__input"
                placeholder={placeholder}
                style={style}
                type={password ? "password" : "text"}
                onChange={
                    e => {
                        if(onChange) {
                            onChange(e.target.value);       
                        }
                    }
                }
            />
        );
    }
}

export default withRouter(Input);