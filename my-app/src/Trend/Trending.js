import React from 'react';
import Trend from '../JSON/Nike.json';
import '../homePage/styles/Ads.css';
import { Card, CardHeader, CardBody, CardFooter, Col, Container, Row } from 'reactstrap';

const Trending = () => {
    return (
        <div className="Trending">
            <div className="pgtitles">
                <p>TOP PRODUCTS</p>
                <h4>TRENDING THIS WEEK</h4>
            </div>
            <Container>
                <Row>
                {Trend.map((post) => {
                  return (
                    <Col md="3">
                    <Card>
                        <CardHeader>
                            <img src={post.img} alt="Products image" />
                        </CardHeader>
                        <CardBody>
                            <div className="infotitle">
                                <p className="sname">{post.name}</p>
                                <span className="sprice">{post.price}</span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                    )
                })}
                </Row>
            </Container>
        </div>
                );
};

export default Trending;