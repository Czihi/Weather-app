import React from "react";
import author from "../images/autor.png";

const About = () => {
    return (
        <div className="about-flex">
            <div className="authorDiv">
                <img className="authorResponsive" src={author} alt="author" draggable={false} unselectable={true}/>
            </div>
            <div className="social-links line">

                        <p className="social-link">
                            Github: <a className="link" href="https://github.com/Czihi/" target="_blank" rel="noopener noreferrer">https://github.com/Czihi/</a>
                        </p>
                        <p className="social-link">
                            E-mail: <a className="link" href="mailto: marcin.boslak@interia.pl" target="_blank" rel="noopener noreferrer">marcin.boslak@interia.pl/</a>
                        </p>


                        <p className="social-link">Inne projekty:</p>


                        <p className="social-link">Blackbox: <a className="link" href="https://czihi.github.io/E-commerce/" target="_blank"  rel="noopener noreferrer">https://czihi.github.io/E-commerce/</a>
                        </p>


                        <p className="social-link">ACS "Beskidy": <a className="link" href="https://czihi.github.io/ACS-Beskidy/" target="_blank"  rel="noopener noreferrer">https://czihi.github.io/ACS-Beskidy/</a>
                        </p>


                        <p className="social-link">Nike store: <a className="link" href="https://czihi.github.io/nike-store/" target="_blank"  rel="noopener noreferrer">https://czihi.github.io/nike-store/</a>
                        </p>

            </div>
        </div>

    );
};
export default About;