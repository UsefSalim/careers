import { useMemo } from 'react';
import { CgFileDocument } from 'react-icons/cg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Moment } from 'services';
const Card = ({ el }) => {
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
  const cardDate = Moment(el?.updatedAt);
  const dateNow = Moment(new Date());

  return (
    <div className="card">
      {dateNow.diff(cardDate, 'days') < 30 && (
        <span className="card__badg">New</span>
      )}
      <div className="card__date">
        {Moment(el?.updatedAt).format('DD/MM/YYYY')}
      </div>
      <div className="card__title">{el?.jobName}</div>
      <div className="card__info">
        <div>
          <CgFileDocument size={19} />
          <p>
            {
              contratTypeOptions?.find((x) => x?.value === el?.contractType)
                ?.label
            }
          </p>
        </div>
        <div>
          <HiOutlineLocationMarker size={19} />
          <p>Témara</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
