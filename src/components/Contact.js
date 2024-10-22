import React from 'react';

function Contact() {
    return (
        <div className="contactPage">
            <h1>Contact Us!</h1>
            <div className="required"> <span className="star">*</span> please fill all fields</div>
            <form action="">
                <input type="text" id="nameInput" placeholder="Your Name" />
                <input type="email" id="emailInput" placeholder="Your Email Id" />
                <textarea name="txt" id="txt" rows="15" placeholder="Your Message"></textarea>
                <button type="button" className="btn" onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

const submit = () =>{
    let nameInput = document.getElementById('nameInput');
    let emailInput = document.getElementById('emailInput');
    let txt = document.getElementById('txt');

    if(nameInput.value && emailInput.value && txt.value){
        alert("Succesfully submited");
    }
    else{
        alert("Please fill the respective feilds correctly");
    }

    nameInput.value = '';
    emailInput.value = '';
    txt.value = '';    
}
export default Contact;
