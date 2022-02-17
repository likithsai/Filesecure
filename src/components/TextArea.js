import React from "react";

const TextArea = (props) => {
    return (
        <div class="form-floating">
            <textarea class="form-control" placeholder={props.placeholder} id={ props.key } style={{ height: '100px' }} onChange={props.onChange}>{ props.value }</textarea>
            <label for="floatingTextarea">{props.title}</label>
        </div>
    );
}

export default TextArea;