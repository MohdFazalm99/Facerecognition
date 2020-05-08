import React from 'react';

const FaceRecognition = ({imageurl}) => {
    return(
        <div className='center'>
            <img alt='' src={imageurl} />
        </div>
    )
}

export default FaceRecognition;