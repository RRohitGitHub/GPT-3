import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './containers/Header/Header'
import WhatGPT3 from './containers/whatGPT3/WhatGPT3'
import Brand from './components/brand/Brand'
import CTA from './components/cta/Cta'
import Features from './containers/Features/Features'
import Possibility from './containers/possibility/Possibility'
import Blog from './containers/Blog/Blog'
import Footer from './containers/Footer/Footer'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App
