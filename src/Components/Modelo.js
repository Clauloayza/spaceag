import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import '../Css/main.css';
import * as ReactTranslated from 'react-translated';
import translation from '../Translation';

export const Modelo = ({title, subtitle, description}) => {
    return (
        <Grid fluid>
        <Row id="about" className="solutions">
            <Col md={6} sm={6} xs={12} lg={6} className="imgModelo">
           </Col>
           <Col md={6} sm={6} xs={12} lg={6} className="contenedor">
                <div className="contenido">
                    <h2 className="">
                        <ReactTranslated.Translate
                            text="{solution4}"
                            data={{ solution4: title }}
                        /> 
                    </h2>
                    <h3 className="">
                        <ReactTranslated.Translate
                            text="{text4}"
                            data={{ text4: subtitle }}
                        />
                    </h3>
                    <div className="description">
                        <p className="textAbout">
                            <ReactTranslated.Translate
                                text="{parrafo4}"
                                data={{ parrafo4: description }}
                            />
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
        </Grid>
    );
}