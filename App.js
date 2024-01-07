import React from 'react'

import { Footer, Blog, Features, Possibility, Header, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div classname="App">
               <div className="gradient__bg">
                   <Navbar />
                   <Header />
               </div>
               <Brand />
               <WhatGPT3 />
               <Features />
               <Possibility />
               <CTA />
               <Blog />
               <Footer />
        </div>
        
    )
}

export default App

