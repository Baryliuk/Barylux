import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="footer">
            <Link to='/'><div className="logo">BARYLUX®</div></Link>
            <div className="footer_nav">
                <ul className="footer__nav-list">
                    <li className="footer__nav-item">Магазин</li>
                    <li className="footer__nav-item">Підтримка</li>
                    <li className="footer__nav-item">Бренд</li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;