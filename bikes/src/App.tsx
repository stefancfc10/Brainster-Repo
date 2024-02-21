import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './css/style.css';
import {Header} from './components/header/Header';
import Footer from './components/footer/Footer';
import Bikes from './components/bikes/Bikes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './components/filters/Filters';

function App() {


    return (
        <div className='b_color'>
            <div className='container'>
                <div className="row">
                    <Header/>
                    <div className='row'>
                        <Bikes/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>


    );
}

export default App;
