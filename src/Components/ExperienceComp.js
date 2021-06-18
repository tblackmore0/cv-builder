import { useRef } from 'react';
import ExperienceList from './ExperienceMeta'

function ExperienceComp () {
  /*  const positionRef = useRef()
    const companyRef = useRef()
    const locationRef = useRef()
    const startDateRef = useRef()
    const leaveDateRef = useRef() */

    return (

        <div className = 'formSection'>
            <h2>Experience</h2> 
            <input type='text' id='position' /* ref={positionRef} */placeholder='Position' />
            <input type='text' id='company' /* ref={companyRef} */placeholder='Company' />
            <input type='text' id='location' /* ref={locationRef} */ placeholder='Location' />
            <input type='date' id='startDate' /* ref={startDateRef} */ placeholder='Starting date' />
            <input type='date' id='leaveDate' /* ref={leaveDateRef} */ placeholder='Leaving' />
        </div>

    )};

export default ExperienceComp