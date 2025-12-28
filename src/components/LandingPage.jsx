import ModelPhoto from '../assets/back.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function LandingPage() {
    return (
        <div className="landing__wrap">
            <div className="landing__content">
                <h1 className="landing__title">
                    Якісні речі <br />
                    За доступними цінами
                </h1>   
               <Link to='/Product'><button className="landing__btn">Перегляти товар</button></Link> 
            </div>
            <div className="landing__image">
                <img src={ModelPhoto} alt="Fashion Model" />
            </div>
        </div>
    )
}
export default LandingPage;