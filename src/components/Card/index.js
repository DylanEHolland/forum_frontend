import React from 'react';
import { withRouter } from 'react-router';

import './custom.scss';

class Card extends React.Component {
    render = () => {
        let {children} = this.props;

        return (
            <div className="card">
                {children}
            </div>
        );
    }
}

export default withRouter(Card);