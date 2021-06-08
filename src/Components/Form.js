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
            title = userTitle,
            firstName = userFirstName,
            lastName = userLastName,
            address = userAddress,
            phoneNumber = userPhoneNumber,
            email = userEmailRef,
        };

        console.log(formData);
    }

    


    return (
        <div className = 'card'>
            <h1>Personal Information</h1>
            <form onSubmit={submitHandler}>
                <div className = 'formSection'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' required id='title' ref={titleRef} />
                </div>
                <div className = 'formSection'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' required id='firstName' ref={firstNameRef} />
                </div>
                <div className = 'formSection'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' required id='lastName' ref={lastNameRef} />
                </div>
                <div className = 'formSection'>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressRef} />
                </div>
                <div className = 'formSection'>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input type='number' required id='phoneNumber' ref={phoneNumberRef} />
                </div>
                <div className = 'formSection'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' required id='email' ref={emailRef} />
                </div>
                <div className = 'formSection'>
                    <button className = 'submitButton'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;