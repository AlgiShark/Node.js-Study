import React from 'react';
import Tilt from 'react-tilt';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br-2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{ paddingTop: '5px' }} alt='logo' src="https://img.icons8.com/ios/50/000000/brain--v2.png" />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;