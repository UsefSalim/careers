import { useOutsideAlerter } from 'hooks';
import Image from 'next/future/image';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import { GrFormClose } from 'react-icons/gr';
import reactStringReplace from 'react-string-replace';
import { compareProps } from 'services';

const Header = ({
  jobs,
  handleChange,
  values,
  handleSubmit,
  setFieldValue,
}) => {
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
          <form
            className="header__form"
            action=""
            id="searchForm"
            onSubmit={handleSubmit}
          >
            <InputOffre
              {...{
                setFieldValue,
                handleChange,
                values,
                jobs,
                handleSubmit,
              }}
            />
            <div className="header__inputContainer">
              <InputType {...{ setFieldValue, jobs, values }} />
              <button
                form="searchForm"
                className="header__button"
                aria-label="Search Button"
                type="submit"
              >
                <FiSearch />
              </button>
              <button
                form="searchForm"
                className="header__button--mobile"
                aria-label="Search Button"
                type="submit"
              >
                <FiSearch /> Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

const InputOffre = ({
  setFieldValue,
  handleChange,
  values,
  jobs,
  handleSubmit,
}) => {
  const [filtredJob, setFiltredJob] = useState(jobs);

  // ---------------------- Options Data
  const [openInputOffre, setOpenInputOffre] = useState(false);
  const handleChoises = (e) => {
    const value = e?.target?.value;
    if (value?.length > 0) {
      setOpenInputOffre(true);
      setFiltredJob(
        jobs?.filter((job) =>
          job?.jobName?.toLowerCase().includes(value?.toLowerCase())
        )
      );
    } else {
      setOpenInputOffre(false);
      setFiltredJob(jobs);
    }
  };
  const handleOffreClick = (jobName) => {
    setFieldValue('job', jobName);
    setOpenInputOffre(false);
    handleSubmit();
    setFiltredJob(jobs);
  };
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, () => {
    setOpenInputOffre(false);
  });
  return (
    <div className="input__offre">
      <input
        autoComplete="off"
        type="text"
        className={`header__input header__input--offre ${
          openInputOffre ? ' header__input--offreOpen' : ''
        }`}
        placeholder="Chercher une offre ici…"
        id="job"
        name="job"
        onChange={(e) => {
          handleChange(e);
          handleChoises(e);
        }}
        value={values.job}
        onFocus={() => {
          setOpenInputOffre(true);
        }}
      />
      {values?.job?.length > 0 && (
        <div
          className="close__button"
          onClick={() => {
            setFieldValue('job', '');
            // setOpenInputOffre(false);
            handleSubmit();
            setFiltredJob(jobs);
          }}
        >
          <GrFormClose />
        </div>
      )}
      {openInputOffre && (
        <div className="input__offreDataContainer" ref={wrapperRef}>
          {filtredJob?.map((el, key) => (
            <div
              onClick={() => handleOffreClick(el?.jobName)}
              className={'offre'}
              key={key}
            >
              <span className="offre__jobName">
                {reactStringReplace(el?.jobName, values.job, (match, i) => (
                  <b>{match}</b>
                ))}
              </span>
              <span></span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const InputType = ({ setFieldValue, jobs, values }) => {
  const contratTypeOptions = useMemo(
    () => [
      { value: 'Internship', label: 'Stage PFE' },
      { value: 'ANAPEC', label: 'ANAPEC' },
      { value: 'CDI', label: 'CDI' },
      { value: 'CDD', label: 'CDD' },
      { value: 'Freelance', label: 'Freelance' },
      { value: 'undefined', label: 'Autre' },
    ],
    []
  );
  const [openInputType, setOpenInputType] = useState(false);
  const [up, setUp] = useState(false);
  const [checked, setChecked] = useState([]);
  const [countData, setContData] = useState({});

  // useOutsideAlerter(wrapperRef, () => {
  //   setOpenInputType(false);
  // });
  const handleCheckChange = (isChecked, value) => {
    setChecked(
      isChecked ? [...checked, value] : checked?.filter((el) => el !== value)
    );
    setFieldValue(
      'departements',
      isChecked ? [...checked, value] : checked?.filter((el) => el !== value)
    );
  };
  useEffect(() => {
    const counts = {};
    jobs.forEach(function (x) {
      counts[x.contractType] = (counts[x.contractType] || 0) + 1;
    });
    setContData(counts);
  }, [jobs]);

  // const wrapperTypeRef = useRef(null);

  // useOutsideAlerter(wrapperTypeRef, () => {
  //   // setOpenInputTypeWrapper(false);
  // });

  return (
    <div className="input__type">
      <div
        onClick={() => {
          setOpenInputType(!openInputType);
          setUp(!up);
        }}
      >
        <div
          className={`header__input header__input--type ${
            openInputType ? ' header__input--typeOpen' : ''
          }`}
        >
          Type d’emploi{' '}
          {checked?.length > 0 ? (
            <span style={{ color: '#21B2D4' }}>
              {'(' + checked?.length + ')'}
            </span>
          ) : (
            ''
          )}
        </div>
      </div>
      <div
        onClick={() => {
          setOpenInputType(!openInputType);
          setUp(!up);
        }}
        className={`${!up ? 'up__button' : 'down__button'}`}
      >
        <FiChevronDown />
      </div>
      {openInputType && (
        <div className="input__typeDataContainer">
          {Object?.keys(countData)?.map((key, index) => (
            <div className="type" key={key}>
              <label className="container">
                {contratTypeOptions?.find((el) => el?.value === key)?.label}
                <span style={{ color: '#ACACAC' }}> ({countData[key]})</span>
                <input
                  type="checkbox"
                  checked={values?.departements.includes(key) ? true : false}
                  onChange={(e) => handleCheckChange(e?.target?.checked, key)}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Header, compareProps);
