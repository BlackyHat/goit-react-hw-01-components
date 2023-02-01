import { Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }: IFriendList) => {
  return (
    <>
      <Status as="span" online={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};

interface IFriendList {
  avatar: string;
  name: string;
  isOnline: boolean;
  id?: number;
}
