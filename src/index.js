import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './Store/Store';
import {Provider} from 'redux-zero/react'

const Index = () =>{
    return (
        <Provider store = {store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
