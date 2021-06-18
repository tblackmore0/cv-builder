import { useRef } from 'react';
import experienceMeta from './ExperienceMeta'


function SubmitHandler (event) {

    event.preventDefault();

 /*   const firstNameRef = useRef();
    const lastNameRef = useRef();
    const addressRef = useRef();
    const phoneNumberRef = useRef();
    const emailRef = useRef();
    

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

        */

        experienceMeta()
    };




export default SubmitHandler