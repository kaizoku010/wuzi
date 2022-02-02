import React from 'react'
import HeroSection from './HeroSection';
import "./Home.css";
import ItemHolder from './ItemHolder';
import StillIntrested from './StillIntrested';
import TopbarMenu from "./TopbarMenu";

function Home() {
    return (
        <div>
            <TopbarMenu />   
            <HeroSection />
            <StillIntrested />
            <ItemHolder/>
        </div>
    )
}

export default Home
