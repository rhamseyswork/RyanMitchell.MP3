import React from 'react';
import {Spinner} from 'react-bootstrap';

const Loader = () => {
    return (
        <div>
        <Spinner animation='border' role='status' style={{width: '100px', height: '100px', display: 'block'}} />
        <div className='sr-only' style={{paddingTop: "50px"}}>Loading...</div>
        </div>
    );
}

export default Loader;