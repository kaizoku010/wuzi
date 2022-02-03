import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemHolder from './ItemHolder';
import "./WuziSlider.css"
import Test from "../images/dummy.jpg";
import Test1 from "../images/dummy2.jpg";
import Test2 from "../images/dummy3.jpg";
import Test3 from "../images/dummy4.jpg";
import Test4 from "../images/dummy5.jpg";
import Test5 from "../images/dummy6.jpg";
import Test6 from "../images/dummy7.jpg";




function WuziSlider() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    

    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button className="slider-btn" onClick={() => onClick()} />;
    };
    
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group"> // remember to give it position:absolute
            <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
            <button onClick={() => next()} />
            <button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button>
          </div>
        );
      };

    return <div>
        <Carousel className="Wuzi-slider"
        //    swipeable={true}
            draggable={true}
            customRightArrow={<CustomRightArrow />}
        //   showDots={true}
          responsive={responsive}
           infinite={true}
           autoPlay={true}
           autoPlaySpeed={3000}
        //    keyBoardControl={true}
            transitionDuration={900}
            arrows={true}
            // customButtonGroup={<ButtonGroup />}
           containerClass="carousel-container"
           removeArrowOnDeviceType={["tablet", "mobile"]}
        //   deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
        //   itemClass="carousel-item-padding-40-px"
        >
            <ItemHolder img={Test} />
            <ItemHolder img={Test1} />
            <ItemHolder img={Test2} />
            <ItemHolder img={Test3} />
            <ItemHolder img={Test4} />
            <ItemHolder img={Test5} />
            <ItemHolder img={Test6} />

          

      </Carousel>
  </div>;
}

export default WuziSlider;
