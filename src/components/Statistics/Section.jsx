import { Statistics } from 'components/Statistics/Statistic';
import data from '../../data.json';

export const Section = ({ title }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <Statistics stats={data} />
    </section>
  );
};
