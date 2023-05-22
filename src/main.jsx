import React from 'react';
import ReactDOM from 'react-dom/client';
// import HolaCaracola from './HolaMundoApp';
// import {  HolaMundoApp } from './HolaMundoApp';
// import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>          
        {/* <FirstApp title="Hola, soy Goku" subTitle="No me gusta Vegetta" name="Javier Saez" /> */}
        <CounterApp value={100} />    

    </React.StrictMode>
);




