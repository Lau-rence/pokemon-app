//Components and styles
import Events from "./Events";
import "./HomeIntro.css";

const HomeIntro = () => {
    return (
    <div className="home-intro">
        <h1>Welcome to Pokémon Universe!</h1>
        <h3>Embark on a journey through the captivating world of Pokémon. Stay ahead of the curve with the latest Pokémon events and discover the secrets of these incredible creatures.</h3>
        <Events/>
    </div>
    );
}
 
export default HomeIntro;