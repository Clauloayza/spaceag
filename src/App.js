import React, {Component} from 'react';
import { connect } from 'redux-zero/react';
import './Archives/css/bootstrap.min.css';
import './App.css';
import {Navigator} from './Components/Nav';
import {Header} from './Components/Header';
import {Digital} from './Components/Digital';
import {Detecta} from './Components/Detecta';
import {Integra} from './Components/Integra';
import {Modelo} from './Components/Modelo';
import {Conteo} from './Components/Conteo';
import {Control} from './Components/Control';
import {Counter} from './Components/Counter';
import {Customers} from './Components/Customers';
import {Media} from './Components/Media';
import {Contact} from './Components/Contact';
import {Blog} from './Components/Blog';
import {Footer} from './Components/Footer';
import * as ReactTranslated from 'react-translated';
import translation from './Translation';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      language: 'es',
    }

    this.onClickSwitchLanguage = this.onClickSwitchLanguage.bind(this);
  }
 
  onClickSwitchLanguage() {
    const language = {
      es: 'en',
      en: 'es',
    }[this.state.language]
    this.setState({ language })
  }
  render(){
    const { language } = this.state;
    return(
      <ReactTranslated.Provider language={language} translation={translation}>
        <div>
          <Navigator/>
          <Header title={this.props.spaceag.title} subtitle={this.props.spaceag.subtitle} switchLanguage={() => this.onClickSwitchLanguage()} language={language}/>
          <Digital title1={this.props.titles.soluciones} title={this.props.subtitle.solution1} subtitle={this.props.text.text1} description={this.props.parrafo.parrafo1}/>
          <Detecta title={this.props.subtitle.solution2} subtitle={this.props.text.text2} description={this.props.parrafo.parrafo2}/>
          <Integra title={this.props.subtitle.solution3} subtitle={this.props.text.text3} description={this.props.parrafo.parrafo3}/>
          <Modelo title={this.props.subtitle.solution4} subtitle={this.props.text.text4} description={this.props.parrafo.parrafo4}/>
          <Conteo title={this.props.subtitle.solution5} subtitle={this.props.text.text5} description={this.props.parrafo.parrafo5}/>
          <Control title={this.props.subtitle.solution6} subtitle={this.props.text.text6} description={this.props.parrafo.parrafo6}/>
          <Counter counter1={this.props.counter.a} counter2={this.props.counter.b} counter3={this.props.counter.c} counter4={this.props.counter.d}/>
          <Customers title2={this.props.titles.customers}/>
          <Media title3={this.props.titles.media}/>
          <Contact title4={this.props.titles.contact} text={this.props.contacto.text} a={this.props.contacto.name} b={this.props.contacto.email} c={this.props.contacto.puesto} d={this.props.contacto.compania} e={this.props.contacto.message}/>
          <Blog title={this.props.blog.page} button={this.props.blog.view} />
          <Footer/>
        </div>
      </ReactTranslated.Provider>
    );
  }
}

const mapToProps = ({spaceag, titles, subtitle, text, parrafo, counter, contacto, blog, switchLanguage, language}) => ({spaceag, titles, subtitle, text, parrafo, counter, contacto, blog, switchLanguage, language});
export default connect (mapToProps)(App);
