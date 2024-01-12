import { React } from 'react'
import './PetCat.scss'
import images from './Images'

const PetCat = ({ calculateIrritation }) => {

    let start // start time
    let stop // stop time
    let delta // delta between start and stop time


    // get the start time
    const petCat = () => {

        start = new Date()

    }

    // get the stop time
    const stopPetCat = () => {

        stop = new Date()

        // calculate the difference and divide by 1000 to get seconds
        delta = (stop - start) / 1000

        // pass that back to Cat.jsx for calculations
        calculateIrritation(delta)

    }

    return (
        <div id='pet_cat_target' onMouseDown={() => {
            petCat()

            // while mouse is down, change image to cat_cool to give some sort of response
            document.getElementById('cat_image').src = images.cat_cool

        }} onMouseUp={() => {

            stopPetCat()

        }} ></div>
    )

}

export default PetCat