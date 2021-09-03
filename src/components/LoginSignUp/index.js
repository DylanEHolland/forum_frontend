import React from 'react';
import { withRouter } from 'react-router';

import './custom.scss';

import Input from '../Input';
import Card from '../Card';
import Button from '../Button';

import {SignUpUser} from "../../api/user";

class LoginSignUp extends React.Component {
    state = {
        user_name: "",
        pass_word: ""
    }

    render = () => {
        let {user_name, pass_word} = this.state;
        
        return (
            <Card>
                <h1>Join today and start discussing</h1>
                <div className="login__sign--up">
                    <Input 
                        placeholder="username"
                        displayBlock={true}
                        value={user_name}
                        onChange={
                            e => this.setState({user_name: e})
                        }
                    />
                    <Input 
                        placeholder="password"
                        password={true}
                        displayBlock={true}
                        value={pass_word}
                        onChange={
                            e => this.setState({pass_word: e})
                        }
                    />
                    <Button
                        style={{margin: "36px auto"}}
                        displayBlock={true}
                        onClick={this.signUpAction}
                    >Sign up</Button>
                </div>
            </Card>
        );
    }

    signUpAction = () => {
        SignUpUser(this.state)
        .then(
            res => {
                console.log(res);
            }
        )
    }
}

export default withRouter(LoginSignUp);