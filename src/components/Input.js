import React from 'react';

const Input = (props) => {
    return (
        <div class="form-floating mb-3">
            <input type={props.type} class="form-control" id={props.key} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
            <label for="floatingInput">{ props.title }</label>
        </div>
    )
}

export default Input;