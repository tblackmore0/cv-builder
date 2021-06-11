import { useRef } from 'react';

function Form () {

    const titleRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const addressRef = useRef();
    const phoneNumberRef = useRef();
    const emailRef = useRef();

    function submitHandler (event) {
        event.preventDefault();

        const userTitle = titleRef.current.value;
        const userFirstName = firstNameRef.current.value;
        const userLastName = lastNameRef.current.value;
        const userAddress = addressRef.current.value;
        const userPhoneNumber = phoneNumberRef.current.value;
        const userEmailRef = emailRef.current.value;

        const formData = {
            title: userTitle,
            firstName: userFirstName,
            lastName: userLastName,
            address: userAddress,
            phoneNumber: userPhoneNumber,
            email: userEmailRef,
        };

        console.log(formData);
    }

    


    return (
        <div className = 'form'>
            <h2>Personal Information</h2>
            <form onSubmit={submitHandler}>
                <div className = 'formSection'>
                    <input type='text' required id='title' ref={titleRef} placeholder='Title' />
                </div>
                <div className = 'formSection'>
                    <input type='text' required id='firstName' ref={firstNameRef} placeholder='First name' />
                </div>
                <div className = 'formSection'>
                    <input type='text' required id='lastName' ref={lastNameRef} placeholder='Last name' />
                </div>
                <div className = 'formSection'>
                    <input type='text' required id='address' ref={addressRef} placeholder='Address' />
                </div>
                <div className = 'formSection'>
                    <input type='number' required id='phoneNumber' ref={phoneNumberRef} placeholder='Phone number' />
                </div>
                <div className = 'formSection'>
                    <input type='email' required id='email' ref={emailRef} placeholder='Email' />
                </div>
                <div className = 'formSection'>
                    <button className = 'submitButton'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;