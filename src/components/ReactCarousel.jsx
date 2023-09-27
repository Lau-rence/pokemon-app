//Packages
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

//Components and styles
import './ReactCarousel.css'
const ReactCarousel = () => {
    return (
        <>
            <Carousel className="carousel-slide" 
                autoPlay 
                centerMode
                infiniteLoop 
                interval={3000}
                showArrows={false}
            >
                <div>
                    <img src="/carousel/carousel1.png"/>
                </div>
                <div>
                    <img src="/carousel/carousel2.jpg"/>
                </div>
                <div>
                    <img src="/carousel/carousel3.jpg"/>
                </div>
            </Carousel>
        </>
    );
}
 
export default ReactCarousel;