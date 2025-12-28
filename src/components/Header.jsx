import search from '../assets/search.svg'
import account from '../assets/account.svg'
import basket from '../assets/basket.svg'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className="header">
           <Link to='/'><div className="logo">BARYLUX</div></Link> 
            <div className="nav__bar">
                <ul className="nav__list">
                    <li className="nav__item sales">Знижки</li>
                    <li className="nav__item"><span className='drop'>Чоловікам</span></li>
                    <li className="nav__item"><span className='drop'>Жінкам</span></li>
                </ul>
            </div>
            <div className="tools">
                <img className="search" src={search} alt="search"/>
                <img className="account" src={account} alt="account" />
                <img className="basket" src={basket} alt="basket" />
            </div>
        </div>

    )
}

export default Header;