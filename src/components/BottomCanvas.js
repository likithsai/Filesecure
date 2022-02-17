import React from 'react';

const BottomCanvas = (props) => {
    return (
        <div class="offcanvas offcanvas-bottom h-auto pb-3" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title fw-bold" id="offcanvasBottomLabel">{ props.title }</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body small">
                { props.children }
            </div>
        </div>
    );
}

export default BottomCanvas;