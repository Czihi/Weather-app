import React from 'react'
import cold from './cold.png'
import medium from './medium.png'
import warm from './warm.png'
import hot from './hot.png'
import hot2 from './hot2.png'
import './Image.css'
const Image = (props)=>{
    let content = (
            <div>
                <img className="Image" src={cold} alt="temperature"/>
            </div>
        )
    if(props.temperature===''){
        return null
    }
    if(props.temperature>=283) {
        content = (
            <div>
                <img className="Image" src={medium} alt="temperature"/>
            </div>
        )
    }
    if(props.temperature>=293){
        content = (
                <img className="Image" src={warm} alt="temperature"/>
        )
    }
    if(props.temperature>=303){
        content = (
            <div>
                <img className="Image" src={hot} alt="temperature"/>
            </div>
        )
    }
    if(props.temperature>=313){
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