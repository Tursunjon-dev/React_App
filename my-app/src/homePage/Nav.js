import React from 'react';
import navLogo from '../images/logo.png';
import like from '../images/icons/love.png';
import user from '../images/icons/user.png';
import shopping from '../images/icons/shopping-cart.png';
import SearchIcon from '@material-ui/icons/Search';

const Nav = () => {
    return (
        <div>
            <nav className="navigation">
                <a href="#" className="nav-logo">
                    <img src={navLogo}/>
                </a>
                <div className="searchSec">
                    <form>
                        <input 
                            type="text" 
                            className="searchInput" 
                            placeholder="Search For Products, Brands & Categories"
                        />
                        <button className="searchBtn" type="button">
                            <SearchIcon />
                        </button>
                    </form>
                </div>
                <div className="icons">
                    <a href="#" className="bolimlar">
                        <img src={user} />
                    </a>
                    <a href="#" className="bolimlar">
                        <img src={like} />
                    </a>
                    <a href="#" className="bolimlar">
                        <img src={shopping} />
                    </a>
                </div>
            </nav>
        </div>
    )
}


export default Nav;