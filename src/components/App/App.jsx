import { Profile } from 'components/Profile/Profile';
import { Section } from 'components/Statistics/Section';
import user from '../../user.json';
import data from '../../data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats" stats={data}></Section>
      {/* <Statistics stats={data} /> */}
    </div>
  );
};
