import React from 'react';
import Typewriter from 'typewriter-effect';

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

                <div className="content">
                    <ul>
                        <li> TextUtils helps in altering user data conveniently. User can change the case of their text, count the number of words and letters in their text.</li>
                        <li> This website is made using REACT JS , jsx , HTML and CSS. </li>
                        <li> In formation of the logic useState hook has been used. </li>
                    </ul>
                </div>
            </div>

        </>
    )

}

export default About
