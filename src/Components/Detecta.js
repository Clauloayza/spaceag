import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import '../Css/main.css';
import * as ReactTranslated from 'react-translated';
import translation from '../Translation';

export const Detecta = ({title, subtitle, description}) => {

    return (
        
        <Grid fluid>
        <Row id="about" className="solutions">
            <Col md={6} sm={6} xs={12} lg={6} className="imgTermica">
           </Col>
           <Col md={6} sm={6} xs={12} lg={6} className="contenedor">
                <div className="contenido">
                    <h2 className="">
                        <ReactTranslated.Translate
                            text="{solution2}"
                            data={{ solution2: title }}
                        />
                    </h2>
                    <h3 className="">
                        <ReactTranslated.Translate
                            text="{text2}"
                            data={{ text2: subtitle }}
                        />
                    </h3>
                    <div className="description">
                        <p className="textAbout">
                            <ReactTranslated.Translate
                                text="{parrafo2}"
                                data={{ parrafo2: description }}
                            />
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
        </Grid>

    );
}