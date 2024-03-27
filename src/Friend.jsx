import Button from "./Button";

/* eslint-disable react/prop-types */
const Friend = ({ friend, onAddSplitBill, select }) => {
  const isSelected = select?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">You owe your friend ${Math.abs(friend.balance)}</p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          Your friend owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and your friend are even</p>}

      <Button className="button" onClick={() => onAddSplitBill(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
