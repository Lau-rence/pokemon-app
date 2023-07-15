import './ContactUs.css'
export default function ContactUs () {
    return(
        <div className="contactus">
            <div className="contactus-bg" style={{backgroundImage: `linear-gradient( to right, #19224f, transparent) , url('pokemon-bg2.jpg')`}}>
                <h1>Hello there...</h1>
                <div className='message'>
                    <div className='contactus-container'>
                        <label>Name: </label>
                        <input type="text" placeholder='Enter your name here...'/>
                        <label>Email: </label>
                        <input type="text" placeholder='Enter your email here...'/>
                    </div>
                    <div className='contactus-container'>
                        <label>Message: </label>
                        <textarea placeholder='Enter you message here...'/>
                    </div>
                    <div className='contactus-container'>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}