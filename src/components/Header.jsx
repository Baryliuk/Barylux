import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className="header">
            <Link to='/'><div className="logo">BARYLUX®</div></Link>
            <div className="nav__bar">
                <ul className="nav__list">
                    <Link to='/Product'><li className="nav__item">Магазин</li></Link>
                    <Link to='/about'><li className="nav__item">Про бренд</li></Link>
                    <li className="nav__item">Контакти</li>
                </ul>
            </div>
        </div>

    )
}

export default Header;