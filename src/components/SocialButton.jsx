import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const SocialButton = ({github, facebook, linkedin}) => {
  return (
    <div id="icons">
    {github && <FontAwesomeIcon icon={faGithub} size="2xl" />}
    {facebook && <FontAwesomeIcon icon={faFacebook} size="2xl" />}
    {linkedin && <FontAwesomeIcon icon={faLinkedinIn} size="2xl"/>}
    </div>
  )
};

export default SocialButton;
