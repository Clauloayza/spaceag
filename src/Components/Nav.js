import React from 'react';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';
import '../Css/main.css';
import spaceag from '../Img/spaceag.png';
import * as ReactTranslated from 'react-translated';
import translation from '../Translation';

export const Navigator = () => {
    return (
        <Navbar inverse collapseOnSelect className="col-lg-12">
            <Navbar.Header  >
                <Navbar.Brand pullLeft>
                <img href="#header" src={spaceag} alt="logo" className="logo-spaceag"  />
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse >
            
                <Nav pullRight >
                    <NavItem eventKey={2} href="#soluciones"><ReactTranslated.Translate text="SOLUCIONES"/></NavItem>
                    <NavItem eventKey={3} href="#clientes"><ReactTranslated.Translate text="CLIENTES"/></NavItem>
                    <NavItem eventKey={4} href="#media"><ReactTranslated.Translate text="MEDIA"/></NavItem>
                    <NavItem eventKey={5} href="#contacto"><ReactTranslated.Translate text="CONTACTO"/></NavItem>
                    <NavItem eventKey={6} href="#blog"><ReactTranslated.Translate text="BLOG"/></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
