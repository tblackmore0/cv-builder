import { useRef } from 'react';

function Personal () {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const addressRef = useRef();
    const phoneNumberRef = useRef();
    const emailRef = useRef();

    return (
        <div className = 'form'>
            

                <div className = 'formSection'>

                    <h2>Personal Information</h2>
            
                    <input type='text'  id='firstName' ref={firstNameRef} placeholder='First name' />
                    <input type='text'  id='lastName' ref={lastNameRef} placeholder='Last name' />
                    <input type='text'  id='address' ref={addressRef} placeholder='Address' />
                    <input type='number'  id='phoneNumber' ref={phoneNumberRef} placeholder='Phone number' />
                    <input type='email'  id='email' ref={emailRef} placeholder='Email' />

                </div>

        </div>
    )
}

export default Personal;