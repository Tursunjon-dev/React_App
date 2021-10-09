import React from 'react';
import Shopping from '@material-ui/icons/ShoppingBasket';
import Iphone from '../images/iphones.png';

const Home = () => {
    return (
        <div className="home1">
            <div className="main">
                <div className="side1">
                    <h3>
                        GET THE NEW IPHONE 12 PRO MAX
                    </h3>
                    <p>
                        A transformative triple-camera system that
                        adds tons capability without complexity
                    </p>
                    <div className="buttons">
                        <a href="#" className="button1">Buy now <Shopping /></a>
                        <a href="#" className="button1">With $599 with trade-in</a>
                    </div>
                </div>
                <div className="side2">
                    <img src={Iphone} alt="iphones image" />
                </div>
            </div>
        </div>
    );
};


export default Home;