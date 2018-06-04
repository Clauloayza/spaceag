import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import '../Css/main.css';
import * as ReactTranslated from 'react-translated';
import translation from '../Translation';

export const Integra = ({title, subtitle, description}) => {
    return (
    <Grid fluid>
        <Row  id="" className="solutions">
            <Col md={6} sm={6} xs={12} lg={6} className="contenedor">
                <div className="contenido">
                    <h2 className="">
                        <ReactTranslated.Translate
                            text="{solution3}"
                            data={{ solution3: title }}
                        /> 
                    </h2>
                    <h3 className="">
                        <ReactTranslated.Translate
                            text="{text3}"
                            data={{ text3: subtitle }}
                        />
                    </h3>
                    <div className="description">
                        <p className="textAbout">
                            <ReactTranslated.Translate
                                text="{parrafo3}"
                                data={{ parrafo3: description }}
                            />
                        </p>
                    </div>
                </div>
            </Col>
            <Col md={6} sm={6} xs={12} lg={6} className="data">
            
            </Col>
        </Row>
    </Grid>
    );
}