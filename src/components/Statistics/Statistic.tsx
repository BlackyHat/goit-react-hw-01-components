import { Item, StatList, Percentage } from './Statistic.styled';

export const Statistics = ({ stats }: IStatistics) => {
  return (
    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id}>
          <span>{label}</span>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </StatList>
  );
};

interface IStatistics {
  stats: {
    id: string;
    label: string;
    percentage: number;
  }[];
}
