import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange,Buttonsubmit}) => {
    return(
        <div>
            <p className='white f3'>
                {'This Application will detect faces in your pictures. Have a try!'}
            </p>
            <p className='Black  f4'>
                {'Enter the Image URL in the dialogbox'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                <button 
                className='w-30 grow f4 link ph3 pv2 dib white bg-black'
                onClick={Buttonsubmit}
                >Detect</button>
            </div>
        </div>
        </div>
    )

}

export default ImageLinkForm;