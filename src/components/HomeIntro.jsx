//Components and styles
import Events from "./Events";
import "./HomeIntro.css";
import Carousel from './ReactCarousel';

const HomeIntro = () => {
    return (
    <div className="home-intro" >
        <h1>Welcome to Pokémon Universe!</h1>
        <h3>Embark on a journey through the captivating world of Pokémon. Stay ahead of the curve with the latest Pokémon events and discover the secrets of these incredible creatures.</h3>
        <Events/>
        <h2>Announcement:</h2>
        <h4>Here are the three winners of the Digital Artwork Competition.</h4>
        <Carousel/>
    </div>
    );
}
 
export default HomeIntro;