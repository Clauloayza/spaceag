import React  from 'react';
import {Col, Grid, Row, Image} from 'react-bootstrap';
import '../Css/main.css';
import noticeSpaceag from '../Img/spaceagNotice.jpg';
import lab4 from '../Img/lab4.jpg';
import dia1 from '../Img/media/dia1.png';
import agap from '../Img/media/agap.png';
import laNacion from '../Img/media/laNacion.png';
import elComercio from '../Img/media/elComercio.png';
import cnn from '../Img/media/cnn.png';
import venture from '../Img/media/venture.png';
import latina from '../Img/media/latina.png';
import confiep from '../Img/media/confiep.png';
import canal from '../Img/media/canal.png';
import * as ReactTranslated from 'react-translated';
import translation from '../Translation';

export const Media = ({title3}) => {
    return (
        <Grid fluid id="media">
            <Row className="center">
            <Col md={12} sm={12} xs={12} lg={12}  className="section-nav">
            <h1 className="sections">
                <ReactTranslated.Translate
                    text="{media}"
                    data={{ media: title3 }}
                />   
            </h1> 
            </Col>
            <Col md={12} sm={12} xs={12} lg={12} className="space">
                
                <ul className="media">
                        
                        <li>
                            <Image src={dia1} alt="dia1"  />
                        </li>
                        <li>
                            <Image src={agap} alt="agap"  />
                        </li>
                        <li>
                            <Image src={laNacion} alt="La Nación" />
                        </li>
                        <li>
                            <Image src={elComercio} alt="El Comercio"  />
                        </li>
                        <li>
                            <Image src={cnn} alt="CNN" />
                        </li>
                        <li>
                            <Image src={venture} alt="Venture" />
                        </li>
                        <li>
                            <Image src={latina} alt="Latina"  />
                        </li>
                        <li>
                            <Image src={confiep} alt="Confiep"  />
                        </li>
                        <li>
                            <Image src={canal} alt="Canal" />
                        </li>
                        
                    </ul>
               
                    
                </Col>
               </ Row>
               <Row>
                <div className="videomedia container" md={12} sm={12} xs={12} lg={12}>
                <Col md={2} sm={2} xs={6} lg={2}>
                    <Image className="noticeSpace" width="100%" height="110px" src={noticeSpaceag} alt="notice" />
                    <a href="https://lavca.org/2017/07/26/spacedat-ceo-guillermo-de-vivanco-opportunity-big-data-agtech-funding-gap-sector/"><button className="btn btn-primary"><ReactTranslated.Translate text="LEER"/></button></a>
                </Col>
                <Col md={2} sm={2} xs={6} lg={2}>
                    <Image className="noticeSpace" width="100%" height="110px" src={lab4} alt="LAB4" />
                    <a href="https://www.infoturperu.com.pe/index.php/noticias/item/1048-promperu-innovadores-peruanos-destacan-en-el-lab4-de-la-alianza-del-pacifico"><button className="btn btn-primary"><ReactTranslated.Translate text="LEER"/></button></a>
                </Col>
                <Col md={2} sm={2} xs={6} lg={2}>
                    <iframe className="noticeSpace" width="100%" height="110px" src="https://www.youtube.com/embed/xUI-emuPkYI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <a href="https://www.youtube.com/embed/xUI-emuPkYI"><button className="btn btn-primary view"><ReactTranslated.Translate text="VER"/></button></a>
                </Col>
                <Col md={2} sm={2} xs={6} lg={2}>
                    <iframe className="noticeSpace" width="100%" height="110px" src="https://www.youtube.com/embed/JWzEA8aYlco?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <a href="https://www.youtube.com/embed/JWzEA8aYlco?rel=0&amp;controls=0&amp;showinfo=0"><button className="btn btn-primary view"><ReactTranslated.Translate text="VER"/></button></a>
                </Col>
                <Col md={2} sm={2} xs={6} lg={2}>
                    <iframe className="noticeSpace" width="100%" height="110px" src="https://www.youtube.com/embed/Cvb-syRLWJQ?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <a href="https://www.youtube.com/embed/Cvb-syRLWJQ?rel=0&amp;controls=0&amp;showinfo=0"><button className="btn btn-primary view"><ReactTranslated.Translate text="VER"/></button></a>
               </Col>
                <Col md={2} sm={2} xs={6} lg={2}>
                    <iframe className="noticeSpace" width="100%" height="110px" src="https://www.youtube.com/embed/tB1Rus3E9AU?rel=0&amp;controls=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <a href="https://www.youtube.com/embed/tB1Rus3E9AU?rel=0&amp;controls=0&amp;showinfo=0"><button className="btn btn-primary view"><ReactTranslated.Translate text="VER"/></button></a>
                </Col>
                </div>      
            </Row>
        </Grid>
    );
}