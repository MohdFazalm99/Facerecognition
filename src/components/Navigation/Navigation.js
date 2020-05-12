import React from 'react';

const Navigation = ({onRoutechange}) => {
    return(
        <nav style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
            <p onClick={() => onRoutechange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    );
}

export default Navigation;