import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import '../Css/main.css';
import * as ReactTranslated from 'react-translated';
import translation from '../Translation';

export const Digital = ({title1, title, subtitle, description}) => {
    return (
    <Grid fluid id="soluciones">
       <Row >
            <Col md={12} sm={12} xs={12} lg={12} className="section-nav">
            <h1 className="sections">
                <ReactTranslated.Translate
                    text="{soluciones}"
                    data={{ soluciones: title1 }}
                />
            </h1> 
            </Col>
            
            </Row>
            <Row  id="" className="solutions">
                <Col md={6} sm={6} xs={12} lg={6} className="contenedor">
                    <div className="contenido">
                        <h2 className="">
                            <ReactTranslated.Translate
                                text="{solution1}"
                                data={{ solution1: title }}
                            />                       
                        </h2>
                        <h3 className="">
                            <ReactTranslated.Translate
                                text="{text1}"
                                data={{ text1: subtitle }}
                            />
                        </h3>
                        <div className="description">
                            <p className="textAbout">
                                <ReactTranslated.Translate
                                    text="{parrafo1}"
                                    data={{ parrafo1: description }}
                                />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={6} sm={6} xs={12} lg={6} className="dashboard">
                
                </Col>
            </Row>
        </Grid>
    );
}