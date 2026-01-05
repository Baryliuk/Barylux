import Pidpis from '../assets/pidpis.png'
function AboutUs() {
    return (
        <div className="about">
            <div className="about__text">
                <h1 className="about__title">BARYLUX: Філософія свідомого вибору.</h1>
                <p className="about__subtitle">Ми віримо, що одяг — це не просто речі, а продовження вашої особистості. Наша мета — створювати позачасові образи, які поєднують у собі бездоганний комфорт та лаконічний дизайн. <br /> <br /> Ми обираємо якість замість кількості, створюючи базу, що залишається актуальною поза сезонами та трендами.</p>
            </div>
        <img className='pidpis' src={Pidpis} />
        <p className='subpidpis'>Ваша впевненість у кожній деталі.</p>
        </div>

    )
}
export default AboutUs;