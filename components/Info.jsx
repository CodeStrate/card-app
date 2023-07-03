import profile from '../assets/Profile.jpeg'
import Mail from '../assets/MailIcon.svg'

export default function Info() {
    return (
        <section className='info'>
            <img className='profile-photo' src={profile} alt="" />
            <h3 className='info--name'>Hardik Sharma</h3>
            <p className='info--title'>Developer/Designer</p>
            <small className='info--website'>codestrate.web</small>
            <div className='info--email'>
                <img className='mail-icon' src={Mail} alt='Mail'/>
                <h4>Email</h4>
            </div>
                
        </section>
    )
}