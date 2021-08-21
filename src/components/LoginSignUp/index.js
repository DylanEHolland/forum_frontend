import React from 'react';
import { withRouter } from 'react-router';

import './custom.scss';

import Input from '../Input';
import Card from '../Card';
import Button from '../Button';

class LoginSignUp extends React.Component {
    state = {
        first: "",
        last: "",
        password: ""
    }

    render = () => {
        let {first, last, password} = this.state;
        console.log(this.state);
        return (
            <Card>
                <h1>Join today and start discussing</h1>
                <div className="login__sign--up">
                    <Input 
                        placeholder="first name"
                        displayBlock={true}
                        value={first}
                    />
                    <Input 
                        placeholder="last name"
                        displayBlock={true}
                        value={last}
                    />
                    <Input 
                        placeholder="password"
                        password={true}
                        displayBlock={true}
                        value={password}
                    />
                    <Button
                        style={{margin: "36px auto"}}
                        displayBlock={true}
                    >Sign up</Button>
                </div>
            </Card>
        );
    }
}

export default withRouter(LoginSignUp);