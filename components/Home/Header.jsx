import Image from 'next/future/image';
import { FiSearch } from 'react-icons/fi';
const Header = () => {
  return (
    <header className="header">
      <div className="header__bgContainer">
        <div className="header__container">
          <h1 className="header__title">
            <span>
              Rejoignez la startup qui pense chaque jour au bien-être de ses
              collaborateurs
            </span>
            <Image
              src="/assets/mini_logo.svg"
              alt="sobrus careers"
              priority
              quality={100}
              width={111.34}
              height={94.13}
            />
          </h1>
          <form className="header__form">
            <input
              className="header__input header__input--offre"
              type="text"
              placeholder="Chercher une offre ici…"
            />
            <div className="header__inputContainer">
              <input
                className="header__input header__input--type"
                type="text"
                placeholder="Type d’emploi"
              />
              <button className="header__button" aria-label="Search Button">
                <FiSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
