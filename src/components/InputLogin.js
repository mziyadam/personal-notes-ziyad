import useInput from "../hooks/UseInput";
import React from 'react';
import { Button } from 'react-bootstrap';
import { login } from '../utils/network-data';
import PropTypes from 'prop-types';
function InputLogin({loginSuccess}) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    async function mLogin(event) {
        event.preventDefault();
        const { error, data } = await login({
            "email": email,
            "password": password
        }
        );
        if (!error) {
            loginSuccess(data);
        }
    }
    return (
        <div className="input-login">
            <form onSubmit={mLogin} className='login-input'>
                <div className='ps-4 pe-4'>
                    <div className="input-group input-group-sm m-3">
                        <span className="input-group-text">Email</span>
                        <input type="email" class="form-control" id="email" value={email} onChange={onEmailChange} />
                    </div>

                    <div className="input-group input-group-sm m-3">
                        <span className="input-group-text">Password</span>
                        <input type="password" class="form-control" id="password" value={password} onChange={onPasswordChange} />
                    </div>
                    <div className='text-center'>
                        <Button type="submit" variant='secondary'>Login</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
InputLogin.propTypes = {
  loginSuccess: PropTypes.func.isRequired
};
export default InputLogin;