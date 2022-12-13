import PropTypes from 'prop-types';
// import {
//   UserProfile,
//   Description,
//   Avatar,
//   Stats,
//   UserName,
//   Label,
//   Quantity,
//   Tag,
//   Location,
// } from './Profile.styled';

export const Statistics = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
