import Image from 'next/future/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
const Nav = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  return (
    <>
      {checked && (
        <div className="nav__items--mobile">
          <Link href="/jobs">
            <a
              className={`${
                router.pathname === '/jobs' ? 'navMobile__item--active' : ''
              } navMobile__item`}
              data-content="Liste des offres"
            >
              Liste des offres
            </a>
          </Link>
          <Link href="/join-us">
            <a
              className={`${
                router.pathname === '/join-us' ? 'navMobile__item--active' : ''
              } navMobile__item`}
              data-content="Candidature spontanée"
            >
              Candidature spontanée
            </a>
          </Link>
        </div>
      )}
      <div className="nav__container">
        {/* {checked && <p>test</p>} */}
        <nav className="nav">
          <div className="nav__images">
            <label className="nav__menu" htmlFor="check">
              <input
                onChange={handleChange}
                checked={checked}
                type="checkbox"
                id="check"
              />
              <span></span>
              <span></span>
              <span></span>
            </label>
            <Link href="/">
              <a onClick={() => setChecked(false)}>
                <Image
                  className="nav__logo"
                  src="/assets/logo.svg"
                  alt="sobrus careers"
                  priority
                  quality={100}
                  width={125}
                  height={43.03}
                />
              </a>
            </Link>
          </div>

          <div className="nav__items">
            <Link href="/jobs">
              <a
                className={`${
                  router.pathname === '/jobs' ? 'nav__item--active' : ''
                } nav__item`}
                data-content="Liste des offres"
                onClick={() => setChecked(false)}
              >
                Liste des offres
              </a>
            </Link>
            <Link href="/join-us">
              <a
                onClick={() => setChecked(false)}
                className={`${
                  router.pathname === '/join-us' ? 'nav__item--active' : ''
                } nav__item`}
                data-content="Candidature spontanée"
              >
                Candidature spontanée
              </a>
            </Link>
          </div>

          <ul className="nav__icons">
            <li className="nav__icon nav__icon--facebook">
              <a href="https://facebook.com">
                <FaFacebookF className="facebook" />
              </a>
            </li>
            <li className="nav__icon nav__icon--linkedin">
              <a>
                <FaLinkedinIn className="linkedin" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
