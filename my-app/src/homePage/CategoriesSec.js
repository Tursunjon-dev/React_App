import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MenuIcon from '@material-ui/icons/Menu';

const CategoriesSec = () => {

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <div className="body">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    <MenuIcon className="menuIcon" />
                    All Categories
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Menu 1</DropdownItem>
                    <DropdownItem>Menu 2</DropdownItem>
                    <DropdownItem>Menu 3</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ul className="link_item">
                <li className="Home">
                    <a href="#" className="link_active">
                        Home
                    </a>
                </li>
            </ul>
            <ul className="link_item">
                <li className="Home">
                    <a href="#" className="link">
                        Trending
                    </a>
                </li>
            </ul>
            <ul className="link_item">
                <li className="Home">
                    <a href="#" className="link">
                       New arrival
                    </a>
                </li>
            </ul>
            <ul className="link_item">
                <li className="Home">
                    <a href="#" className="link">
                       Deals for you
                    </a>
                </li>
            </ul>
            <ul className="link_item">
                <li className="Home">
                    <a href="#" className="link">
                        Discounts
                    </a>
                </li>
            </ul>
            <ul className="link_item">
                <li className="Home">
                    <a href="#" className="link">
                        Weekly offers
                    </a>
                </li>
            </ul>
            <ul className="link_item">
                <li className="Home">
                    <a href="#" className="link">
                       Become a venter
                    </a>
                </li>
            </ul>
        </div>
    );
};


export default CategoriesSec;
