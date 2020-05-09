import React from 'react';
import '/home/fazal/Documents/Facerecognition/src/components/FaceRecognition/Facerecognition.css'


const FaceRecognition = ({imageurl,box}) => {
    return(
        <div className='center ma'>
        <div className='absolute mt2'>
         <img id='inputimage' alt='' src={imageurl} width='300px' height='auto' />
         <div className='bounding-box' style={{top:box.toprow, right:box.rightcol, bottom:box.bottomrow, left:box.leftcol}}></div>

        </div>
            
        </div>
    )
}

export default FaceRecognition;