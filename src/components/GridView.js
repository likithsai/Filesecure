import React from 'react';

const NoItems = () => {
    return (
        <div className='vh-100 p-0 my-auto'> 
            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
                <main role="main" className="inner cover">
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
                    <div class="accordion-button collapsed border-bottom" type="button" data-bs-toggle="collapse" data-bs-target={'#id_' + item.id} aria-expanded="false" aria-controls={item.id}>
                        <span className='fw-bold'>{item.title}</span>
                    </div>
                </h2>
                <div id={'id_' + item.id} class="accordion-collapse collapse" aria-labelledby={item.title} data-bs-parent={'#' + item.id}>
                    <div class="accordion-body bg-light">
                        <p>{item.description}</p>
                        <p className='text-muted'>Date: { item.date }</p>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary">Edit</button>
                            <button type="button" class="btn btn-primary">Delete</button>
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