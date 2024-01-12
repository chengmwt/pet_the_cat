import React, { useEffect, useRef, useState } from 'react'
import './Cat.scss'
import PetCat from './PetCat'
import images from './Images'


const Cat = () => {


    // const [irritation, setIrritation] = useState(0)
    const irritation = useRef(0)
    // const [petting, setPetting] = useState(false)
    const [petting, setPetting] = useState(false)

    const irritationArray = [
        Math.random() * 0.5,
        Math.random() * 0.5 + 0.5,
        Math.random() * 0.5 + 1,
        Math.random() * 0.5 + 2,
        Math.random() * 0.5 + 4,
        Math.random() * 0.5 + 8,
        Math.random() * 0.5 + 16,
        Math.random() * 0.5 + 32,
        Math.random() * 0.5 + 64
    ]


    const calculateIrritation = (delta) => {

        console.log(delta)

        const deltaToIrritation = Math.floor(delta * 2)

        // 1 < delta && delta < 1.2 ? setIrritation(irritation - Math.floor(Math.random() * 2)) : setIrritation(irritationArray[deltaToIrritation] + irritation)

        1 < delta && delta < 1.2 ? irritation.current -= Math.floor(Math.random() * 2) : irritation.current += irritationArray[deltaToIrritation]

        console.log(`button held for ${delta} seconds`)

        console.log(`Irritation is at ${irritation.current}`)

        setPetting(false)
    }


    const pettingListener = (value) => {

        setPetting(value)

    }


    useEffect(() => {
        irritation.current < -10 ? console.log('you win') : irritation.current > 10 ? console.log('you died') : console.log('')
    }, [irritation.current])


    return (
        <div className="cat_wrapper">

            <div className='cat'>
                <PetCat calculateIrritation={calculateIrritation} pettingListener={pettingListener} ref={irritation} /><img className='cat_image' src={petting === true ? images.cat_cool :
                    irritation.current < -8 ? images.cat_double_heart
                        : irritation.current < -4 ? images.cat_heart
                            : irritation.current < -2 ? images.cat_tongue
                                : irritation.current > 8 ? images.cat_irritated
                                    : irritation.current > 4 ? images.cat_angry
                                        : irritation.current > 2 ? images.cat_surprised
                                            : images.cat_default} alt="cat's expression" />

            </div>

        </div>
    )
}

export default Cat