import React from 'react';

function Contact() {
    return (
        <div className="contactPage">
            <h1>Contact Us!</h1>
            <form action="">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email Id" />
                <textarea name="txt" id="txt" rows="15" placeholder="Your Message"></textarea>
                <button type="button" className="btn" onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

const submit = () =>{
    alert("Succesfully submited");
}
export default Contact;