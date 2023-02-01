import { StatisticsSection, Title } from './Section.styled';

import { Statistics } from '../Statistics/Statistic';

export const Section = ({ title, stats }: Iprops) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <Statistics stats={stats} />
    </StatisticsSection>
  );
};

interface Iprops {
  title: string;
  stats: {
    id: string;
    label: string;
    percentage: number;
  }[];
}
