import React from 'react';
import BookIcon from '@material-ui/icons/Book';

function Header(){
    return(
        <>
        <header>
            <div className="py-4 bg-info shadow-lg mb-4">
            <div className="ms-3 d-flex flex-row"><BookIcon style={{ fontSize : 50, color : 'white'}}/><h2 style={{fontFamily: "'Bebas Neue', cursive",
            fontFamily: "'Zen Tokyo Zoo', cursive"}} className="text-white ps-2 py-2 mb-0">PJ KEEP</h2></div>
            </div>
        </header>
        </>
    );
}

export default Header;