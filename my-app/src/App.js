import React, { useState, useEffect } from 'react';
import Clicker from './Clicker';

function App(props) {


    const [loading, setLoading] = useState(false);
    
    // useEffect(() => {   ==========> COMPONENTDIDUPDATE
    //     console.log("Hello world");
    // })

    // useEffect(() => { ===========> COMPONENTDIDMOUNT
    //     console.log("Hello world");
    // }, [])

    // useEffect(() => { ===========> COMPONENTWILUNMOUNT
    //     return console.log("Hello world", loading);
    // }, [loading])

    

    return (
        <div className="App">
            {/* 
            <button onClick={() => setCount(count + 1)} className="start">Incr</button>
            <button onClick={() => setCount(count - 1)} className="stop">Decr</button> */}
            <button onClick={() => setLoading(!loading)} className="btn">Toggle React</button>
            {loading && <Clicker/>}
        </div>
    );
}

export default App;