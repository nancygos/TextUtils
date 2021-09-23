import React from 'react';
import Typewriter from 'typewriter-effect';

// sdf dfdfdff
function About() {
    return (
        <>
            <div className="aboutME">
                <h1 className="heading" >
                    <Typewriter

                        onInit={(typewriter) => {

                            typewriter

                                .typeString("Hi...")

                                .pauseFor(500)
                                .deleteAll()
                                .typeString("My name is Nancy Goswami")
                                .pauseFor(500)
                                .deleteAll()
                                .typeString("I am a web developer")
                                .start();
                        }}
                    />
                </h1>
            </div>

        </>
    )

}
// js code

// const s = document.getElementById('head');
// const arr = ["Hi , My name is Nancy Goswami" , "I am a Web Developer"];

export default About
