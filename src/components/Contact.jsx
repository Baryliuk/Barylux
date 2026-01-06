function Contact() {
  return (
    <>
    <div className="contact">
      <div className="name">
        <p className="name__title">name</p>
        <input type="text" placeholder="Jane Smith"/>
      </div>
      <div className="email">
        <p className="email__title">email</p>
        <input type="text" placeholder="jane@gmail.com"/>
      </div>
      <div className="message">
        <p className="message__title">message</p>
        <textarea type="text" placeholder="Your message..."/>
      </div>
      <button className="contaсt__btn">Залиште дані, і ми зв'яжимось з вами</button>
    </div>
    <div className="social">
      <p className="social__title">Соціальні мережі</p>
      <p className="social__subtitle">Знайдіть нас у соціальних мережах для новин.</p>
      <p className="social__link">Instagram: <a href="https://www.instagram.com/barylux.ua/">@Barylux</a></p>
    </div>
    </>
  );
}
export default Contact;
