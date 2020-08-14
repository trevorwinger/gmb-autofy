import React from 'react';

const InputValueController = (props) => 
{
return (
    <div>
        <h2>{props.title}</h2>
        <input value={props.value} onChange={props.onChange}></input>
    </div>
)
}

export default InputValueController;