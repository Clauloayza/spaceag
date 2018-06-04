import React from 'react';
import {Col, Row} from 'react-bootstrap';
import '../Css/main.css';

export const Footer = () => {
    return(
        <Row className="footer">
            <Col lg={5} sm={5} md={4}>
            </Col>
            <Col xs={12} lg={2} sm={2} md={4} className="redes">
                <Col xs={3} lg={3} sm={3} md={3}>
                <a href=""><i className="fa fa-instagram"></i></a>
                </Col>  
                <Col xs={3} lg={3} sm={3} md={3}>
                <a href="https://www.facebook.com/Spacedat/"><i className="fa fa-facebook-f"></i></a>
                </Col> 
                <Col xs={3} lg={3} sm={3} md={3}>
                <a href=""><i className="fa fa-linkedin"></i></a>
                </Col> 
                <Col xs={3} lg={3} sm={3} md={3}>
                <a href="https://www.youtube.com/channel/UCmqxVoDpsYbqgBngJGw_2gA"><i className="fa fa-youtube"></i></a>
                </Col>  
                <span>www.spaceag.co</span>
            </Col>
            <Col lg={5} sm={5} md={4}>
            </Col>
        </Row>
    );
}
