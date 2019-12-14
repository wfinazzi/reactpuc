import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

const helloWorld = 'Hello world'
const componentBackground = 'blue'
const props = {
    className: 'main-title',
    style: {
        background: componentBackground,
        marginLeft: '50px'
    }
}

const MyComponent = () => <h1 className="my-title" {... props}>{helloWorld}</h1>
console.log(MyComponent)

ReactDOM.render(<MyComponent />, rootElement)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
