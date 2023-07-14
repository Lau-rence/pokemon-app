import './ContactUs.css'
export default function ContactUs () {
    return(
        <div className="contactus">
            <div className="contactus-bg">
                <h1>Hello there...</h1>
                <div className='message'>
                    <div className='contactus-container'>
                        <label>Name: </label>
                        <input type="text"/>
                        <label>Email: </label>
                        <input type="text"/>
                    </div>
                    <div className='contactus-container'>
                        <label>Message: </label>
                        <textarea/>
                    </div>
                    <div className='contactus-container'>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}