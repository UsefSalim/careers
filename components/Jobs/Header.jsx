import { Form } from 'components/Layout';
import { memo } from 'react';
import { compareProps } from 'services';
const Header = ({
  setFieldValue,
  handleChange,
  values,
  jobs,
  handleSubmit,
}) => {
  return (
    <header className="headerJob">
      <div className="headerJob__bgContainer">
        <div className="header__container">
          <Form
            {...{ setFieldValue, handleChange, values, jobs, handleSubmit }}
          />
        </div>
      </div>
    </header>
  );
};

export default memo(Header, compareProps);
