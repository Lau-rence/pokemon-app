//Packages
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//Components and styles
import './Events.css';

const Events = () => {
    const pokecon = [
        {
            src: '/carousel/pokecon1.jpg',
            description: 'Dress Code'
        },
        {
            src: '/carousel/pokecon2.jpg',
            description: 'Cosplay Competition'
        },
        {
            src: '/carousel/pokecon3.jpg',
            description: 'Trivia Challenge'
        },
    ]
    return (
    <>
        <h2>Events:</h2>
        <div className="home-event">
            <h4>Pokécon PH 2023, May 13, 2023.</h4>
            <div className="event-container">
            <img className='poster' src={'/carousel/pokecon.jpg'}></img>
            <Carousel className="event-slide" showStatus={false} showThumbs={false} autoPlay interval={3000} infiniteLoop>
                {pokecon.map(info=>(
                    <div>
                        <img src={info.src} />
                        <p className="legend">{info.description}</p>
                    </div>
                ))}
            </Carousel>
            </div>
        </div>
    </>
    );
}
 
export default Events;