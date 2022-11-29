import React, { useReducer } from 'react';
import { initialState, reducer } from '../state/formReducer';

const LongForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const submit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <div className='long_form'>
            <form className='form' onSubmit={submit}>
                <div className='d-flex items-center justify-between name-field'>
                    <div className='d-flex flex-column firstName-field'>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name='firstName' id='firstName' onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                    </div>

                    <div className='d-flex flex-column lastName-field'>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name='lastName' id='lastName' onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} />
                    </div>
                </div>

                <div className=' d-flex items-center email-gender-field'>
                    <div className='d-flex flex-column email-field'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                    </div>

                    <div className='gender-field'>
                        <h4>Gender</h4>
                        <div className='d-flex gender-field-wrapper'>
                            <div>
                                <input type="radio" name="gender" id="male" value='male' onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div>
                                <input type="radio" name="gender" id="female" value='female' onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                                <label htmlFor="female">Female</label>
                            </div>
                            <div>
                                <input type="radio" name="gender" id="other" value='other' onClick={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='education-area d-flex items-center justify-between'>
                    <div className='d-flex flex-column'>
                        <label htmlFor="education">Education</label>
                        <select name="education" id="education" onChange={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })}>
                            <option value="SSC">SSC</option>
                            <option value="HSC">HSC</option>
                            <option value="underGrad">Under Graduate</option>
                            <option value="graduate">Graduate</option>
                        </select>
                    </div>

                    <div className='pc-count'>
                        <h4>Number of PCs</h4>
                        <div className='d-flex'>
                            <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
                            <div className='pc-number'>
                                <span>{state.quantity}</span>
                            </div>
                            <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
                        </div>
                    </div>
                </div>

                <div className='feedback-area d-flex flex-column'>
                    <label htmlFor="feedback">Feedback</label>
                    <textarea name="feedback" id="feedback" cols="30" rows="7" onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                </div>

                <div className='d-flex items-center justify-between submit-area'>
                    <div>
                        <input type="checkbox" name="term" id="terms" onClick={() => dispatch({ type: "TOGGLE" })} />
                        <label htmlFor="terms">I agree to terms and conditions</label>
                    </div>
                    <button className={!state.term ? 'disable-btn' : ''} type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default LongForm;