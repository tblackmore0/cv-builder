import { useState, useEffect } from 'react'
import ExperienceComp from './ExperienceComp'


function ExperienceContainer () {

    const [experienceList, updateExp] = useState([<ExperienceComp />])

    useEffect(() => console.log(experienceList));

    function AddExp () {

        updateExp(experienceList.concat([<ExperienceComp />]))

        }

    return (
        <div className = 'formSection'>
            {experienceList}
            <button>Remove</button>
            <button onClick={AddExp}>Add</button>
        </div>
    )

}

export default ExperienceContainer