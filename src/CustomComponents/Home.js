import React from 'react'
import HeroSection from './HeroSection';
import "./Home.css";
import StillIntrested from './StillIntrested';
import TopbarMenu from "./TopbarMenu";

function Home() {
    return (
        <div>
            <TopbarMenu />   
            <HeroSection />
            <StillIntrested/>
        </div>
    )
}

export default Home
