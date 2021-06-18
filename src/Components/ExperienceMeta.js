import { useRef } from 'react';
import CreateExpObjects from './CreateExpObjects'
import { experienceList } from '/home/tom/Documents/the_odin_project/cv-builder/src/App.js'

function ExperienceMeta () {

        const experienceObjects = experienceList.map(CreateExpObjects)

        console.log(experienceObjects);

}

export default ExperienceMeta;