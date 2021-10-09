import React from 'react';
import '../homePage/styles/style.css';
import { Card, CardBody, CardFooter, Col, Container, Row } from 'reactstrap';
import sneaker1 from '../images/img4.jpg';
import sneaker4 from '../images/img2.jpg';
import sneaker5 from '../images/img3.jpg';
const Collection = () => {
    return (
        <div className="newcollec">
            <Container>
                <Row>
                    <Col md="12" className="pagetitle">
                        <div className="Nike">
                            <p>Straight From Nike</p>
                            <h4>New Collection</h4>
                        </div>
                    </Col>
                    <Col className="cardsArea" lg="6" md="12">
                        <Row>
                            <Col className="cards" lg="6" md="6">
                                <Card className="card1">
                                    <CardBody>
                                        <img src={sneaker1} alt="sneaker img" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force 1</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="6" md="6">
                                <Card className="card1">
                                    <CardBody>
                                        <img src={sneaker4} alt="sneaker img" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force 1</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="6" md="6">
                                <Card className="card1">
                                    <CardBody>
                                        <img src={sneaker4} alt="sneaker img" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force 1</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col className="cards" lg="6" md="6">
                                <Card className="card1">
                                    <CardBody>
                                        <img src={sneaker1} alt="sneaker img" />
                                    </CardBody>
                                    <CardFooter>
                                        <div className="texts">
                                            <p>Nike Air Force 1</p>
                                            <span>$99</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Card className="card1">
                            <CardBody>
                                <div className="productPrice">
                                    <span> SALE -50%</span>
                                    <span>$99</span>
                                </div>
                                <img src={sneaker5} alt="Sneaker" />
                            </CardBody>
                            <CardFooter className="leftcard">
                                <h4 className="proname">Nike Air Force 1 Shadow</h4>
                                <p className="probrand">Brand: Nike</p>
                            </CardFooter>
                        </Card>
                    </Col>
                    <div className="btnA">
                        <a href="#" className="abc">Explore Other Products</a>
                    </div>
                </Row>
            </Container>
        </div>
    );
};


export default Collection;
