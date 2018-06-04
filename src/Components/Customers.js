import React from 'react';
import {Col, Grid, Row, Image} from 'react-bootstrap';
import '../Css/main.css';
import agrokasa from '../Img/customers/agrokasa.png'
import talsa from '../Img/customers/talsa.png'
import camposol from '../Img/customers/Camposol.png'
import Sagricola from '../Img/customers/solsol.png'
import hojaRedonda from '../Img/customers/hojaRedonda.png'
import agricola from '../Img/customers/agricola.png'
import sunfruit from '../Img/customers/sunfruits.png';
import * as ReactTranslated from 'react-translated';
import translation from '../Translation';

export const Customers = ({title2}) => {
    return (
        <Grid fluid id="clientes">
            <Row className="">
                
                <Col md={12} sm={12} xs={12} lg={12}  className="section-nav">
                <h1 className="sections">
                    <ReactTranslated.Translate
                        text="{customers}"
                        data={{ customers: title2 }}
                    />
                </h1>
                </Col>
            </Row>
            <Row >
                <Col md={12} sm={12} xs={12} lg={12} className="scrolling">
                   
                
                <ul className="customers">
                        <li>
                            <Image className="customers_elemento" src={sunfruit} alt="Sunfruit" />
                        </li>
                        <li>
                            <Image className="customers_elemento" src={agrokasa} alt="agrokasa" />
                        </li>
                        <li>
                            <Image className="customers_elemento" src={camposol} alt="camposol" />
                        </li>
                        <li>
                            <Image className="customers_elemento" src={talsa} alt="talsa" />
                        </li>
                        <li>
                            <Image className="customers_elemento" src={Sagricola} alt="Sagricola"/>
                        </li>
                        <li>
                            <Image className="customers_elemento" src={hojaRedonda} alt="hojaRedonda"/>
                        </li>
                        <li>
                            <Image className="customers_elemento" src={agricola} alt="Agricola Cerro Prieto" className="acp"/>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Grid>
    );
}
