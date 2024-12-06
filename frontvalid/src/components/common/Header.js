import React from 'react';
import myGif from './../../assets/Logo2.gif';

const Header = () => {
    return(
        <header className="App-header">
            <div className="flex flex-row justify-center items-center space-x-4">
                <img
                    src={myGif}
                    alt="Logo"
                    style={{ display: 'block', margin: '0 auto', cursor: 'pointer' }}
                    onClick={() => window.open('https://www.tornemacasa.es', '_blank')}
                />
            </div>
        </header>
    );
}

export default Header;