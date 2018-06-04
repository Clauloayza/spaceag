import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import '../Css/main.css';
import * as ReactTranslated from 'react-translated';
import translation from '../Translation';

export const Control = ({title, subtitle, description}) => {
    return (
        <Grid fluid>
        <Row id="about" className="solutions">
            <Col md={6} sm={6} xs={12} lg={6} className="sensores">
           </Col>
           <Col md={6} sm={6} xs={12} lg={6} className="contenedor">
                <div className="contenido">
                    <h2 className="">
                        <ReactTranslated.Translate
                            text="{solution6}"
                            data={{ solution6: title }}
                        />  
                    </h2>
                    <h3 className="">
                        <ReactTranslated.Translate
                            text="{text6}"
                            data={{ text6: subtitle }}
                        />
                    </h3>
                    <div className="description">
                        <p className="textAbout">
                            <ReactTranslated.Translate
                                text="{parrafo6}"
                                data={{ parrafo6: description }}
                            />                        
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
        </Grid>
    );
}