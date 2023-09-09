//Components and styles
import './About.css'

const AboutInfo = () => {
    const logos = [
        {
            name: 'ReactJS',
            src: './logos/react.png'
        },
        {
            name: 'Vite',
            src: './logos/vite.png'
        },
        {
            name: 'Axios',
            src: './logos/axios.png'
        },
        {
            name: 'Vanilla CSS',
            src: './logos/css.png'
        },
        {
            name: 'Node',
            src: './logos/node.png'
        },
        {
            name: 'Nodemailer',
            src: './logos/nodemailer.png'
        },
    ]
    return ( 
        <div className="about">
            <div className='about-bg' style={{backgroundImage: `linear-gradient( to right, #19224f, transparent) , url('pokemon-bg1.png')`}}>
                <div className='container-about'>
                    <div className='box'>
                        <h1>Pokémon Application</h1>
                        <div>
                            <p>This web application is only created for fun. It displays all the pokémons and the evolution of them. The developer started the creation on June 26, 2023, while he was studying front-end development. This is also his first solo web application that he launched.</p>
                        </div>
                    </div>
                   
                    <div className='box'>
                        <h1>API used:</h1>
                        <div>
                            <p>This web application is using the <a href='https://pokeapi.co/' target='_blank'>https://pokeapi.co/</a> or the PokéAPI to easily get the pokémons and all the information about it.</p>
                        </div>
                    </div>
                    
                    <div className='box'>
                        <h1>Framework and libraries used:</h1>
                        <div>
                            <p>
                                <ul>
                                    {logos.map((info)=>(
                                        <li>
                                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                            {info.name}
                                            <img 
                                              key={info.name} 
                                              className='logos' 
                                              src={info.src} 
                                              alt={info.name}
                                            >
                                            </img>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </p>
                        </div>
                    </div>
                   
                    <div className='box'>
                        <h1>Developer:</h1>
                        <div>
                            <p>Laurence C. Santos</p>
                        </div>
                    </div>
                    <div className='empty'></div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutInfo;