import React from 'react';
import QRCode from "react-qr-code";

const NoItems = () => {
    return (
        <div className='vh-100 p-0 my-auto'> 
            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
                <main role="main" className="inner cover my-auto">
                    <p className="lead">
                        <p className='fw-bold'>No Items !</p>
                    </p>
                </main>
            </div>
        </div>
    )
}

const HasItems = (props) => {
    return (
        props.items.map(item => (
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <div class="accordion-button collapsed border-bottom border-0" type="button" data-bs-toggle="collapse" data-bs-target={'#id_' + item.id} aria-expanded="false" aria-controls={item.id}>
                        <span className='fw-bold'>{item.title}</span>
                    </div>
                </h2>
                <div id={'id_' + item.id} class="accordion-collapse collapse" aria-labelledby={item.title} data-bs-parent={'#' + item.id}>
                    <div class="accordion-body bg-light">
                        <div className='row'>
                            <div className='col-md-9'>
                                <p className='fw-bold mb-1'>Description</p>
                                <p className='text-muted'>{item.description}</p>
                                <p className='fw-bold mb-1'>Date:</p>  
                                <p className='text-muted'>{ item.date }</p>  
                            </div>
                            <div className='col-md-3 text-center text-lg-end my-3'>
                                <QRCode value={item} size={100}/>
                            </div>
                        </div>
                        <div className='pt-3 mt-3 border-top text-center text-lg-start'>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary" style={{ background: '#098' }}>Edit</button>
                                <button type="button" class="btn btn-primary" style={{ background: '#098' }}>Delete</button>
                                <button type="button" class="btn btn-primary" style={{ background: '#098' }}>Share</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    );
}


const GridView = (props) => {
    return (
        (props.items.length) ?
            <div class="accordion accordion-flush my-3 p-0" id="accordionFlushExample">
                <HasItems items={props.items} />
            </div>
        : 
            <NoItems />
    )
}

export default GridView;