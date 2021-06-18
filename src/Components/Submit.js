import { useRef } from 'react';


function Submit () {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const addressRef = useRef();
    const phoneNumberRef = useRef();
    const emailRef = useRef();
    
    function submitHandler (event) {
        event.preventDefault();

        const userFirstName = firstNameRef.current.value;
        const userLastName = lastNameRef.current.value;
        const userAddress = addressRef.current.value;
        const userPhoneNumber = phoneNumberRef.current.value;
        const userEmailRef = emailRef.current.value;

        const personalData = {
            firstName: userFirstName,
            lastName: userLastName,
            address: userAddress,
            phoneNumber: userPhoneNumber,
            email: userEmailRef,
        };

        console.log(personalData);
    }


}

export default Submit