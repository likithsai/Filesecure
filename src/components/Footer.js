import React from 'react';

const Footer = (props) => {
    return (
        <footer className='border-top fixed-bottom bg-white'>
            <div className="container my-4 text-center  ">
                <p className='mb-2 text-muted'>{ props.text }</p>
            </div>
        </footer>
    );
}

export default Footer;
