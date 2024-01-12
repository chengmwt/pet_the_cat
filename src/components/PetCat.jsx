import { React } from 'react'
import './PetCat.scss'

const PetCat = ({ calculateIrritation, pettingListener }) => {

    let start
    let stop
    let delta


    const petCat = () => {
        start = new Date()
        console.log(start)
        pettingListener(true)

    }

    const stopPetCat = () => {
        stop = new Date()
        console.log(stop)
        delta = (stop - start) / 1000
        console.log(delta)
        calculateIrritation(delta)

        pettingListener(false)

    }

    return (
        <div className='petCatTarget' onMouseDown={petCat} onMouseUp={stopPetCat} ></div>
    )

}

export default PetCat