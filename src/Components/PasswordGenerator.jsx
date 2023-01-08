import React from 'react'
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { PasswordService } from '../Services/PasswordService';

const PasswordGenerator = () => {
    let [state, setState] = useState({
        'generatedPassword': '',
        'passwordLenght': 20,
        "symbol": false,
        'number': false,
        'lower': false,
        'upper': false, 
    });

    let setCopied = useState(false);

    let updateInput = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    };

    let updateCheck = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        })
    };

    let submit = (event) => {
        event.preventDefault();
        let passwordObj = PasswordService.getPasswordObj(state);
        let thePassword = PasswordService.generayePassword(passwordObj, state.passwordLenght);
       setState({...state, generatedPassword: thePassword});
    };

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning p-3">
                                <p className="h4">Password Generator</p>
                            </div>
                            <div className="card-body bg-warning">
                                <form onSubmit={submit} >

                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text">Password</span>
                                            <input 
                                            value={state.generatedPassword}
                                            onChange={updateInput}
                                            name='generatedPassword'
                                            type="text" className='form-control' placeholder='Generated Password' />
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">
                                            <input 
                                               required={true}
                                               value={state.passwordLenght}
                                               onChange={updateInput}
                                               name='passwordLenght'
                                            type="number" className='form-control' placeholder='Password Lenght' />
                                            <span className="input-group-text">Password Lenght</span>
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white ">
                                                <input      
                                                   onChange={updateCheck}
                                                   name='symbol'
                                                type='checkbox' className='form-check-input' />
                                            </span>
                                            <input type='text' disabled={true} placeholder='Symbols' className='form-control' />
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white ">
                                                <input 
                                                 onChange={updateCheck}
                                                 name='number'
                                                type='checkbox' className='form-check-input' />
                                            </span>
                                            <input type='text' disabled={true} placeholder='Numbers' className='form-control' />
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white ">
                                                <input
                                                 onChange={updateCheck}
                                                 name='lower'
                                                type='checkbox' className='form-check-input' />
                                            </span>
                                            <input type='text' disabled={true} placeholder='Lowercase Letters' className='form-control' />
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white ">
                                                <input 
                                                 onChange={updateCheck}
                                                 name='upper'
                                                type='checkbox' className='form-check-input' />
                                            </span>
                                            <input type='text' disabled={true} placeholder='Uppercase Letters' className='form-control' />
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <input type='submit' value='Generate' className='btn btn-outline-dark' />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PasswordGenerator;