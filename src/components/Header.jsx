import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className="header">
           <Link to='/'><div className="logo">BARYLUX®</div></Link> 
            <div className="nav__bar">
                <ul className="nav__list">
                    <li className="nav__item">Магазин</li>
                    <li className="nav__item">Про бренд</li>
                    <li className="nav__item">Контакти</li>
                </ul>
            </div>
        </div>

    )
}

export default Header;