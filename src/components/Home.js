import React , {useState} from 'react';

function Home() {

    const upper= () =>{
        // console.log("convert upper case",words);
        let newWord = words.toUpperCase();
        setWords(newWord);
    }

    const lower = () =>{
        // console.log("lower case converted");
        let newWord = words.toLowerCase();
        setWords(newWord);
    }

    const clear = () =>{
        // console.log("Clear it");
        setWords("");
    }

    const count =()=>{

        // let num = 0;
        // for(let i=0 ; i<words.length ; i++){

        //     if( document.getElementById('text').value ){
        //         if(words[i] === ' ' &&  words[i+1] !== ' ' ){
        //            num++;
        //         }
        //     }
        // }
        // if(c === 0){
            // s.innerHTML = c + " words";
        // }
        // else{
        //     s.innerHTML = (c + 1) + " words";
        // }


        // Very very important ,   Main logic
        let num = 0;
        if(document.getElementById('text').value){
            num = words.trim().split(/\s+/).length;
        }

        let s = document.getElementById("show_number");
        let c = JSON.parse(num);
        s.innerHTML = c + " words";
        
        
        s.classList.toggle("action");
    }
    
    const handleOnChange=(event)=>{
        // console.log("on Change");
        setWords(event.target.value);
    }

    const [words , setWords] = useState("");

    return (
        <div className="data">
            <h1 className="head">Convert your text easily and precisely</h1>
            <textarea name="text" id="text" cols="150" rows="20" placeholder="Enter text here" value={words} onChange={handleOnChange}></textarea>   

            <div id="show_number" ></div>

            <div className="buttons">
                <button type="button" onClick={upper} >Upper Case</button>
                <button type="button" onClick={lower}>Lower Case</button>
                <button type="button" onClick={count}>Count</button>
                <button type="button" onClick={clear}>Clear</button>
            </div>
        </div>
    )
}

export default Home
