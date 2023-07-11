import './Footer.css'
export default function Footer(){
    return(
        <div className='footer'>
          <div className='footer-author'>
            <p>© Laurence - 2023</p>
          </div>
          <div className='footer-accounts'>
            <a href='https://www.linkedin.com/in/laurence-santos-478a8a258/' target="_blank"><img className='icons' src='linkedin icon.png' alt='linkedin icon'></img></a>
            <a href='https://github.com/Lau-rence' target="_blank"><img className='icons' src='github icon2.png' alt='github icon'></img></a>
            <a href='https://www.facebook.com/Lorensssssssssssss' target="_blank"><img className='icons' src='facebook icon.png' alt='facebook icon'></img></a>
          </div>
        </div>
    )
}