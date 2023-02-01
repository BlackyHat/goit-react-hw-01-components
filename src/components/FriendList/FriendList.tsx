import { ListFriends, ListFriendsItem } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }: IFriendsData) => {
  return (
    <ListFriends>
      {friends.map((friend: IFriendData) => (
        <ListFriendsItem key={friend.id}>
          <FriendListItem
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        </ListFriendsItem>
      ))}
    </ListFriends>
  );
};

interface IFriendsData {
  friends: IFriendData[];
}

interface IFriendData {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}
