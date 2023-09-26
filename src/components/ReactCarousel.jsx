//Packages
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//Components and styles
import './ReactCarousel.css'
const ReactCarousel = () => {
    return (
        <>
            <Carousel className="carousel-slide" autoPlay={true} infiniteLoop={true}>
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