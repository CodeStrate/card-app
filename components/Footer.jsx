import FB from '../assets/FacebookIcon.svg'
import TW from '../assets/TwitterIcon.svg'
import LK from '../assets/LinkedinIcon.svg'
import GH from '../assets/GitHubIcon.svg'
import IG from '../assets/InstagramIcon.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="icon-container">
                <img className="socials" src={TW} alt="Twitter" />
                <img className="socials" src={FB} alt="Facebook" />
                <img className="socials" src={IG} alt="Instagram" />
                <img className="socials" src={LK} alt="LinkedIn" />
                <img className="socials" src={GH} alt="GitHub" />
            </div>
        </footer>

    )
}