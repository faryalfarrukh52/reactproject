import React, { useState } from 'react';
import { Message } from './Message.js';
import './App.css';

function App() {

    let [count, setCount] = useState(1);
    let [Morning, setMorning] = useState(true);

    return (

        <
        div className = { `box ${Morning ? 'light' : ''} ` } >

        <
        h1 > DayTime = { Morning ? 'Morning' : 'Night' } < /h1>

        <
        Message price = { count }
        / >

        <
        button onClick = {
            () => setCount(count + 1) //++count
        } > Update Price < /button>

        <
        button onClick = {
            () => setMorning(!Morning)
        } > Press < /button>

        <
        /div>
    );

}

export default App;