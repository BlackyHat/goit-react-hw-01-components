import PropTypes from 'prop-types';
import { StatisticsSection, Title } from './Section.styled';

import { Statistics } from 'components/Statistics/Statistic';

export const Section = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <Title>{title}</Title>
      <Statistics stats={stats} />
    </StatisticsSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
