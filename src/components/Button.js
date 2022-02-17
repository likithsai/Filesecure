import React from 'react';

const Button =(props) => {
    return (
        <button type="button" class="btn btn-primary mt-3 w-100" style={{ backgroundColor: '#098' }} onClick={ props.onClick }>{ props.value }</button>
    );
}

export default Button;