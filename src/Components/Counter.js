import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import '../Css/main.css';
import { render } from 'react-dom';
import CountUp from 'react-countup';
import * as ReactTranslated from 'react-translated';
import translation from '../Translation';

export const Counter = ({counter1, counter2, counter3, counter4}) => {
  return (
      <Grid fluid className="counterDigitos">
             
          <Row className="CounterDig">
              <div className="container boxCounter">
                <div className="row">
                  <div className="col-md-3" >
                  <CountUp className="digitos" start={0} end={45000} duration={3.75} decimal="," />
                    <h3 className="counters">
                      <ReactTranslated.Translate
                        text="{a}"
                        data={{ a: counter1 }}
                      />
                    </h3>
                  </div>
                  <div className="col-md-3">
                  <CountUp className="digitos" start={0} end={520} duration={3.75}/>
                    <h3 className="counters">
                      <ReactTranslated.Translate
                        text="{b}"
                        data={{ b: counter2 }}
                      />
                    </h3>
                  </div>
                  <div className="col-md-3">
                  <CountUp className="digitos" start={0} end={40} duration={3.75}/>
                    <h3 className="counters">
                     <ReactTranslated.Translate
                        text="{c}"
                        data={{ c: counter3 }}
                      />
                    </h3>
                  </div>
                  <div className="col-md-3">
                  <CountUp className="digitos" start={0} end={12} duration={3.75}/>
                    <h3 className="counters">
                      <ReactTranslated.Translate
                        text="{d}"
                        data={{ d: counter4 }}
                      />
                    </h3>
                  </div>
                </div>
              </div>
          </Row>
      </Grid>
  );
}