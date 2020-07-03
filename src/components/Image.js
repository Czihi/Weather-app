import React from 'react'
import cold from '../images/cold.png'
import medium from '../images/medium.png'
import warm from '../images/warm.png'
import hot from '../images/hot.png'
import hot2 from '../images/hot2.png'
import '../css/Image.css'

const Image = (props) => {
    let content = (
        <div>
            <img className="Image" src={cold} alt="temperature"/>
        </div>
    )
    if (props.temperature === '') {
        return null
    }
    if (props.temperature >= 283) {
        content = (
            <div>
                <img className="Image" src={medium} alt="temperature"/>
            </div>
        )
    }
    if (props.temperature >= 293) {
        content = (
            <img className="Image" src={warm} alt="temperature"/>
        )
    }
    if (props.temperature >= 303) {
        content = (
            <div>
                <img className="Image" src={hot} alt="temperature"/>
            </div>
        )
    }
    if (props.temperature >= 313) {
        content = (
            <div>
                <img className="Image" src={hot2} alt="temperature"/>
            </div>
        )
    }

    return (
        content
    );
}

export default Image