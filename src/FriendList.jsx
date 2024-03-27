/* eslint-disable react/prop-types */
import Friend from "./Friend";

const FriendList = ({ friends, onAddSplitBill, select }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onAddSplitBill={onAddSplitBill}
          select={select}
        />
      ))}
    </ul>
  );
};

export default FriendList;
