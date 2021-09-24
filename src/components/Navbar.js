import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {

    const show = () => {
        // console.log("show");
        let s = document.getElementById("lists");
        // s.classList.toggle("change");
        if (s.style.visibility === "hidden") {
            s.style.visibility = "visible";
            s.style.display = "inline-block";
            s.style.padding = "5px";
            s.style.backgroundColor = "white";
            // s.style.margin = "15px";
            s.style.textAlign = "right";

        }
        else {
            s.style.visibility = "hidden";
        }
    }
    return (
        <>
            <nav className="wrapper">
                <div className="container">

                    <h3 className="logo">TextUtils</h3>

                    <div className="lists" id="lists">

                        <ul>
                            <li><NavLink to="/" id="link">Home</NavLink></li>
                            <li><NavLink to="/about" id="link">About Us</NavLink></li>
                            <li><NavLink to="/contact" id="link">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </nav>

           
            
            <div className="burger" onClick={show}>               {/* onClick={show} */}
                <div className="line1 line"></div>
                <div className="line2 line"></div>
                <div className="line3 line"></div>
            </div>

        </>
    )
}

export default NavBar
