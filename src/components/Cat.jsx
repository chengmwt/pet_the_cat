import React, { useEffect, useState } from 'react'
import './Cat.scss'
import PetCat from './PetCat'
import images from './Images'


const Cat = () => {


    // Tracks how irritated the cat is
    const [irritation, setIrritation] = useState(0)

    // Tracks the change in irritation depending on how long the mouse button is held down
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


    // Takes the duration of mousedown and...
    const calculateIrritation = (delta) => {

        // rounds the time down to the second
        const deltaToIrritation = Math.floor(delta * 2)

        // if the time is between 1 to 1.2 seconds then subtract irritation, otherwise increase by the irritationArray
        1 < delta && delta < 1.2 ? setIrritation(irritation - Math.floor(Math.random() * 2)) : setIrritation(irritation + irritationArray[deltaToIrritation])

    }


    // every time that irritation changes...
    useEffect(() => {

        // checks the irritation, if it is -10 you win, if it is +10 you lose
        if (irritation < -10) {
            console.log('you win')
        } else if (irritation > 10) {
            document.getElementById("you_died").classList.remove('hidden')
        }

        // after each check, replace the cat's  expression with the one in the catExpressionArray
        document.getElementById('cat_image').src = catExpressionArray

    }, [irritation])


    // returns an image of the cat's expression based on irritation level
    const catExpressionArray = (
        irritation < -8 ? images.cat_double_heart
            : irritation < -4 ? images.cat_heart
                : irritation < -2 ? images.cat_tongue
                    : irritation > 8 ? images.cat_irritated
                        : irritation > 4 ? images.cat_angry
                            : irritation > 2 ? images.cat_surprised
                                : images.cat_default
    )



    return (
        <div className="cat_wrapper">

            <div className='cat'>
                <PetCat calculateIrritation={calculateIrritation} />
                <img id='cat_image' src={catExpressionArray} alt="cat's expression" />
            </div>

            <div className="you_died hidden" id='you_died'>
                <img src={images.you_died} alt="you lose" />
            </div>

        </div>
    )
}

export default Cat