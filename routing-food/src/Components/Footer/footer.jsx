import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
 import{faCopyright} from '@fortawesome/free-solid-svg-icons';
const Footer = () =>{
    return (
    <div className="footer">
    <FontAwesomeIcon className="copy-icon" icon={faCopyright}/><p className="copyright">Copyright Mayank Srivastava</p>
      
    <FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon>
    <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
    <FontAwesomeIcon className="icon" icon={faTwitter}></FontAwesomeIcon>

    </div>
    )

}
export default Footer;