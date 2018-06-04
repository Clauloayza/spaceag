import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import '../Css/main.css';
import * as ReactTranslated from 'react-translated';
import translation from '../Translation';

export const Blog = ({title, button}) => {
    return (
        <Grid fluid id="blog">
            <Row className="blog">
                <Col md={12} sm={12} xs={12} lg={12}  className="">
                    <div className="blog-container">
                        <h3 className="blog">
                        <ReactTranslated.Translate
                            text="{page}"
                            data={{ page: title }}
                        />
                        </h3>
                        <a className="blog" href="https://blogspaceag.wordpress.com">
                        <ReactTranslated.Translate
                            text="{view}"
                            data={{ view: button }}
                        />
                        </a>
                    </div>
                </Col>
            </Row>
        </Grid>
    );
}