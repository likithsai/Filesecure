import React, { useState, useEffect } from 'react';

const Header = (props) => {
    return (
        <>
            <header className='border-bottom'>
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between py-3">
                        <a href="/" className="d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none">
                            <svg className="me-2" style={props.iconStyles} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#098" viewBox="0 0 16 16">
                                <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"/>
                            </svg>
                            <span className="fs-4 fw-bold">{ props.title }</span>
                        </a>
                        <button type="button" className="btn btn-sm btn-primary text-uppercase" style={{ background: '#098' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">{props.rightButtonText}</button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;