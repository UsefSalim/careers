import { Form } from 'components/Layout';
import Image from 'next/future/image';
import { memo } from 'react';
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
          <Form
            {...{ setFieldValue, handleChange, values, jobs, handleSubmit }}
          />
        </div>
      </div>
    </header>
  );
};

export default memo(Header, compareProps);
