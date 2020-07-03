import React from 'react'
import cold from '../images/cold.png'
import medium from '../images/medium.png'
import warm from '../images/warm.png'
import hot from '../images/hot.png'
import hot2 from '../images/hot2.png'
import '../css/Image.css'

const Image = (props) => {
    let content = null
    var temperature =props.weather.temp;
    if(!props.weather.err && props.weather.city!=null) {
        if (temperature >= 273) {
            content = (
                <div>
                    <img className="Image" src={cold} alt="temperature"/>
                </div>
            )
        }

        if (temperature >= 283) {
            content = (
                <div>
                    <img className="Image" src={medium} alt="temperature"/>
                </div>
            )
        }
        if (temperature >= 293) {
            content = (
                <img className="Image" src={warm} alt="temperature"/>
            )
        }
        if (temperature >= 303) {
            content = (
                <div>
                    <img className="Image" src={hot} alt="temperature"/>
                </div>
            )
        }
        if (temperature >= 313) {
            content = (
                <div>
                    <img className="Image" src={hot2} alt="temperature"/>
                </div>
            )
        }
    }

    return (
        content
    );
}

export default Image