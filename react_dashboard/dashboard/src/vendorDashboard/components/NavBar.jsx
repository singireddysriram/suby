import React from 'react'

const NavBar = ({showLoginHandler, showRegisterHandler, showLogOut, logOutHandler}) => {
    return(
        <div className="navSection">
            <div className="company">
                vendor Dashboard
            </div>
            <div className="userAuth">
                {!showLogOut ? <>
                <span onClick={showLoginHandler}>Login/</span>
                <span onClick={showRegisterHandler}>Register</span>
                </>
                : <span onClick={logOutHandler}>Logout</span>}
                
                
            </div>
        </div>
    )
}

export default NavBar