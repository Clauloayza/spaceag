import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import '../Css/main.css';
import {readAllComments, Contacto} from '../Actions/Actions';
import * as ReactTranslated from 'react-translated';
import translation from '../Translation';

export const Contact = ({title4, text, a, b, c, d, e}) => {
const onSubmit = (e) => {
    e.preventDefault();
    if(this.firstName.value && this.email.value && this.puesto.value && this.compania.value && this.message.value){
        Contacto(this.firstName.value,this.email.value,this.puesto.value,this.compania.value,this.message.value);
        this.firstName.value = "";
        this.email.value = "";
        this.puesto.value = "";
        this.compania.value = "";
        this.message.value = "";
    }
}
    return (
        <Grid fluid id="contacto">
            <Row className="customer-section " >
                <Col md={12} sm={12} xs={12} lg={12}  className="section-nav">
                <h1 className="sections contact">
                    <ReactTranslated.Translate
                        text="{contact}"
                        data={{ contact: title4 }}
                    />
                </h1>
                </Col>
            </Row>
            <Row className="contacto">
            <h3 className="demo"><ReactTranslated.Translate text="{text}" data={{ text: text }}/></h3>
            <form className="dato" onSubmit={onSubmit}>
            <Col md={6} sm={6} xs={12} lg={6}>
                <div className="form-group">
                <div className="dato"><ReactTranslated.Translate text="{name}" data={{ name: a }}/></div>
                <ReactTranslated.Translator>
                {({ translate }) => (
                    <input
                    required
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        placeholder={translate({ text: 'Ingresa tu nombre completo...' })}
                        ref={e=>{this.firstName = e}} required/>
                )}
                </ReactTranslated.Translator>
                </div>
                <div className="form-group">
                <div className="dato"><ReactTranslated.Translate text="{email}" data={{ email: b }}/></div>
                <ReactTranslated.Translator>
                {({ translate }) => (
                    <input
                    required
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder={translate({ text: 'Ingresa tu Correo' })}
                        ref={e=>{this.email = e}} required/>
                )}
                </ReactTranslated.Translator>
                </div>
                <div className="form-group">
                <div className="dato"><ReactTranslated.Translate text="{puesto}" data={{ puesto: c }}/></div>
                <ReactTranslated.Translator>
                {({ translate }) => (
                    <input
                    required
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder={translate({ text: 'Ingrese su puesto de tu empresa...' })}
                        ref={e=>{this.puesto = e}} required/>
                )}
                </ReactTranslated.Translator>
                </div>
                <div className="form-group">
                <div className="dato"><ReactTranslated.Translate text="{compania}" data={{ compania: d }}/></div>
                <ReactTranslated.Translator>
                {({ translate }) => (
                    <input
                    required
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder={translate({ text: 'Ingresa el nombre de tu Empresa...' })}
                        ref={e=>{this.compania = e}} required/>
                )}
                </ReactTranslated.Translator>
                </div>
                </Col>
                <Col className="message" md={6} sm={6} xs={12} lg={6}>                
                    <div className="dato"><ReactTranslated.Translate text="{message}" data={{ message: e }}/></div>
                    <ReactTranslated.Translator>
                    {({ translate }) => (
                        <textarea className="form-control" rows="3" placeholder={translate({ text: 'Escribe tu mensaje' })} ref={e=>{this.message = e}} required></textarea>
                    )}
                    </ReactTranslated.Translator>
                    <button id="submit" type="submit" className="btnSend"><ReactTranslated.Translate text="Enviar"/></button>
                </Col>
                </form>
            </Row>
        </Grid>
    );
}