import Image from 'next/future/image';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__items">
          <div>
            <p className="footer__title">Nos solutions</p>
            <p className="footer__item">Sobrus </p>
            <p className="footer__item">PharmaSobrus </p>
            <p className="footer__item">LabsSobrus </p>
            <p className="footer__item">SNSSobrus </p>
            <p className="footer__item">MED </p>
          </div>
          <div>
            <p className="footer__title">Liens utiles</p>
            <p className="footer__item">Annuaire de Pharmacies</p>
            <p className="footer__item">Annuaire de Médicaments</p>
            <p className="footer__item">Annuaire de Médecins </p>
          </div>
          <div>
            <p className="footer__title footer__title--contact">
              Contactez-nous
            </p>
            <button className="footer__button">
              <Image
                className="footer__contactimage"
                alt="sobrus careers"
                quality={100}
                src="/assets/contact.svg"
                width={25.96}
                height={24}
              />
              <Image
                className="footer__contactimage--mobile"
                src="/assets/contactcolor.svg"
                alt="sobrus careers"
                quality={100}
                width={25.96}
                height={24}
              />
              <span>Contactez-nous</span>
            </button>
          </div>
        </div>
        <div className="footer__logo">
          <div className="footer__img">
            <Image
              src="/assets/footerLogo.svg"
              alt="sobrus careers"
              quality={100}
              width={146}
              height={50}
            />
          </div>
          <p className="footer__droit">Tous droits réservés 2022 - Sobrus</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
