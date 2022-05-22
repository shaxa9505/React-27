import React, {useState} from 'react';

function Clicker(props) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} className="start">Add</button>
            <button onClick={() => setCount(count - 1)} className="stop">Remove</button> 
            <button onClick={() => setCount(0)} className="reset">Reset</button>
        </div>
    );
}

export default Clicker;