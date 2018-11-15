import React from 'react'

import Nav from './Nav'

// import Logo from '../../server/public/img/logo.gif'
// import Logo from '../../server/public/img/logo.svg'

const Header = () => {
    return (
        <header className="heroarea">
            <div className="headercontent">
                <Nav />
                {/* <img src={Logo} alt="" /> */}
                <h1>My Space</h1>
            </div>
        </header>
    )
}

export default Header