import React, { useState } from 'react';
// import from orginal component to used a userState from it.
import useList from './userList';

const Hook = () => {
    const [val, setVal] = useState('');
    // add is a function in userList component.
    const { list, add, remove } = useList(['first', 'second']);

    function handleSubmit() {
        // add a (val = text input value) to list and list come from userList component. 
        add(val);
        setVal('');
    }

    const remover = (index) => {
        remove(index);
    }

    return (
        <>
            {list.map((item, i) =>

                <div key={i}>
                    <span>{item}</span>
                    <button onClick={(e) => { remover(i) }}>Delete</button>
                </div>

            )}

            <input onChange={e => setVal(e.target.value)} value={val} />
            <button onClick={handleSubmit}>Add</button>
        </>
    )
}
export default Hook;