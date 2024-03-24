import React from 'react';
import logo from './logo192.png';
import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from "./ResponsiveAppBar/ResponsiveAppBar";

const pdfURL = './resume.pdf';

function App() {
    return (
        /*<div className="App">
            <header className="App-header">
                <h1>{"Sergio Ariel Juarez"}</h1>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {"Proximamente..."}
                </p>
            </header>
        </div>*/
        <ResponsiveAppBar/>
    );
}

export default App;
