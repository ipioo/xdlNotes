import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import "./app/common/assets/index.scss";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('main-box'));

serviceWorker.unregister();
