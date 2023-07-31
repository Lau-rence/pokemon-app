import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";

const icons = [
  {
    name: 'Linkedin',
    component: <AiFillLinkedin className="icons"/>,
    link: 'https://www.linkedin.com/in/laurence-santos-478a8a258/'
  },
  {
    name: 'Github',
    component: <AiFillGithub className="icons"/>,
    link: 'https://github.com/Lau-rence'
  },
  {
    name: 'Facebook',
    component: <AiFillFacebook className="icons"/>,
    link: 'https://www.facebook.com/Lorensssssssssssss'
  }
  
]
import './Footer.css'
export default function Footer(){
    return(
        <div className='footer'>
          <div className='footer-author'>
            <p>© Laurence - 2023</p>
          </div>
          <div className='footer-accounts'>
            {icons.map((icon)=>(
              <a
                href={icon.link}
                target="_blank"
                key={icon.name}
              >
                {icon.component}
              </a>
            ))}
          </div>
        </div>
    )
}