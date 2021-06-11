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
            <form onSubmit={submitHandler}>

                <div className = 'formSection'>

                    <h2>Personal Information</h2>
            
                    <input type='text' required id='firstName' ref={firstNameRef} placeholder='First name' />
                    <input type='text' required id='lastName' ref={lastNameRef} placeholder='Last name' />
                    <input type='text' required id='address' ref={addressRef} placeholder='Address' />
                    <input type='number' required id='phoneNumber' ref={phoneNumberRef} placeholder='Phone number' />
                    <input type='email' required id='email' ref={emailRef} placeholder='Email' />

                </div>

                <div className = 'formSection'>
                    <h2>Education</h2>
                </div>

                <div className = 'formSection'>
                    <h2>Experience</h2>
                    {/*
                    <input type='text' id='position' ref={positionRef} placeholder='Position' />
                    <input type='text' id='company' ref={companyRef} placeholder='Company' />
                    <input type='text' id='location' ref={locationRef} placeholder='Location' />
                    <input type='date' id='startDate' ref={startDateRef} placeholder='Starting date' />
                    <input type='date' id='leaveDate' ref={leaveDateRef} placeholder='Leaving' />
                    */}
                </div>

                <div className = 'formSection'>
                    <button className = 'submitButton'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Form;