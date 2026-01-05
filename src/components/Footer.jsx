import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <Link to='/'><div className="logo">BARYLUX®</div></Link>
            <div className="footer_nav">
                <ul className="footer__nav-list">
                    <Link to='/Product'><li className="footer__nav-item">Магазин</li></Link>
                    <li className="footer__nav-item">Підтримка</li>
                    <Link to='/About'><li className="footer__nav-item">Бренд</li></Link>
                </ul>
            </div>
        </div>
    )
}
export default Footer;