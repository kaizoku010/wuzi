import React from 'react'
import HeroSection from './HeroSection';
import "./Home.css";
import ItemHolder from './ItemHolder';
import StillIntrested from './StillIntrested';
import TopbarMenu from "./TopbarMenu";
import WuziSlider from './WuziSlider';

function Home() {
    return (
        <div>
            <TopbarMenu />   
            <HeroSection />
            <StillIntrested />
            <WuziSlider/>
        </div>
    )
}

export default Home
