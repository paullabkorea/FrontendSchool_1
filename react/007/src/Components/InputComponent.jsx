import React, { useState } from 'react';import useInput from '../Hook/useInput';

function InputComponent(initState) {
    const [value, setValue] = useInput("")
    
    return (
        <>
        <input type="text" onChange={onChange}/>
        <div>
            {value}
        </div>
        </>
    )
}

export default InputComponent