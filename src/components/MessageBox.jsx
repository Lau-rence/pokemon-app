//Packages
import {AiFillCloseCircle} from 'react-icons/ai'
//Components and styles
import './MessageBox.css';

const MessageBox = ({message, isOpen, onClose}) => {
    if(!isOpen) return null;
    return (
        <div className="message-box">
            <div className="text-box">
                <div onClick={()=> onClose()}><AiFillCloseCircle/></div>
                <p>{message}</p>
            </div>
        </div>
    );
}
 
export default MessageBox;