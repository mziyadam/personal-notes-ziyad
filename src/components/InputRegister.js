import useInput from "../hooks/UseInput";
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data';
import PropTypes from 'prop-types';
function InputRegister() {
    const navigate = useNavigate();
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    
    async function mRegister(event) {
        event.preventDefault();
        const { error } = await register({
            "name": name,
            "email": email,
            "password": password
        }
        );
        if (!error) {
            navigate('/');
        }
    }
    return (
        <div className="input-register">
            <form onSubmit={mRegister} className='register-input'>
                <div className='ps-4 pe-4'>
                    <div className="input-group input-group-sm m-3">
                        <span className="input-group-text">Name</span>
                        <input type="text" class="form-control" id="name" value={name} onChange={onNameChange} />
                    </div>
                    <div className="input-group input-group-sm m-3">
                        <span className="input-group-text">Email</span>
                        <input type="email" class="form-control" id="email" value={email} onChange={onEmailChange} />
                    </div>

                    <div className="input-group input-group-sm m-3">
                        <span className="input-group-text">Password</span>
                        <input type="password" class="form-control" id="password" value={password} onChange={onPasswordChange} />
                    </div>
                    <div className='text-center'>
                        <Button type="submit" variant='secondary'>Register</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
InputRegister.propTypes = {
    name: PropTypes.string,
    onNameChange: PropTypes.func,
    email: PropTypes.string,
    onEmailChange: PropTypes.func,
    password: PropTypes.string,
    onPasswordChange: PropTypes.func,
    mRegister: PropTypes.func
};
export default InputRegister;