import React from 'react';

const Navigation = ({onRoutechange,isSignedin}) => {
    if(isSignedin){
        return(
            <nav style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                <p onClick={() => onRoutechange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        );

    }else {
        return(
            <nav style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                <p onClick={() => onRoutechange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRoutechange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );

    }

}

export default Navigation;