import { Link } from 'react-router-dom';
import landingPng from '../assets/Image_8jwvk58jwvk58jwv.jpg'
function LandingPage() {
    return (
        <div className="landing__wrap">
            <div className="landing__content">
                <h1 className="landing__title">Естетика в деталях.</h1>   
                <img src={landingPng} className='landing__image' alt='image'/>
                <h2 className='landing__subtitle'>Базовий гардероб, що <br /> не потребує зайвих слів.</h2>
              <Link to='/Product'><button className='landing__subtitle-btn'>Дивитися колекцію</button></Link>  
            </div>
        </div>
    )
}
export default LandingPage;