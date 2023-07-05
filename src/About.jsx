import './About.css'
export default function About () {
return(
    <>
        <div className="about">
            <h1>Pokémon Application</h1>
            <h2>This web application is only created for fun. It displays all the pokémons and the evolution of them. The developer started the creation on June 26, 2023, while he was studying front-end development. This is also his first solo web application that he launched.</h2>
            <hr style={{borderColor: 'black', border: 'solid 1px'}} />
            <h1>API used:</h1>
            <h2>This web application is using the <a href='https://pokeapi.co/' target='_blank'>https://pokeapi.co/</a> or the PokéAPI to easily get the pokémons and all the information about it.</h2>
            <hr style={{borderColor: 'black', border: 'solid 1px'}} />
            <h1>Framework used:</h1>
            <h2>
                <li>React.js</li>
                <li>Vite</li>
            </h2>
            <hr style={{borderColor: 'black', border: 'solid 1px'}} />
            <h1>Developer:</h1>
            <h2>Laurence C. Santos</h2>
        </div>
    </>
)
}
