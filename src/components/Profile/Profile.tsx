import {
  UserProfile,
  Description,
  Avatar,
  Stats,
  UserName,
  Label,
  Quantity,
  Tag,
  Location,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }: IProps) => {
  return (
    <UserProfile>
      <Description>
        <Avatar src={avatar} alt={username} />
        <UserName className="name">{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </UserProfile>
  );
};

interface IProps {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}
