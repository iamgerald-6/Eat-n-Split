import FormAddFriend from "./FormAddFriend";
import FriendList from "./FriendList";
import Button from "./Button";
import { useState } from "react";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriend] = useState(initialFriends);
  const [select, setSelected] = useState(null);

  const handleAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  const handleFriend = (friend) => {
    setFriend((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  const handleSplitBill = (friend) => {
    setSelected((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleBill = (value) => {
    setFriend((friends) =>
      friends.map((friend) =>
        friend.id === select.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelected(null);
  };
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            onAddSplitBill={handleSplitBill}
            select={select}
          />
          {showAddFriend && <FormAddFriend onAddFriend={handleFriend} />}
          <Button onClick={handleAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        {select && <FormSplitBill select={select} onSplitBill={handleBill} />}
      </div>
    </>
  );
}

export default App;

// const Shoes = [
//   {
//     id: 1,
//     name: "Church shoe",
//     image: "assest/jpgs/shoe 1.jpg",
//     price: 30.99,
//     save: false,
//     inCart: false,
//   },
//   {
//     id: 2,
//     name: "Nike shoe",
//     image: "assest/jpgs/shoe 2.jpg",
//     price: 50.99,
//     save: false,
//     inCart: false,
//   },
//   {
//     id: 3,
//     name: "Alligator shoe",
//     image: "assest/jpgs/shoe 3.jpg",
//     price: 20.99,
//     save: false,
//     inCart: false,
//   },
//   {
//     id: 4,
//     name: "All-Stars",
//     image: "assest/jpgs/shoe 4.jpg",
//     price: 40.99,
//     save: false,
//     inCart: false,
//   },
//   {
//     id: 5,
//     name: "Luffa",
//     image: "assest/jpgs/shoe 5.jpg",
//     price: 30.99,
//     save: false,
//     inCart: false,
//   },
//   {
//     id: 6,
//     name: "Alexis",
//     image: "assest/jpgs/shoe 6.jpg",
//     price: 25.99,
//     save: false,
//     inCart: false,
//   },
// ];

// const Glasses = [
//   {
//     id: 7,
//     name: "MK",
//     image: "assest/jpgs/glasses 1.jpg",
//     price: 10.99,
//     save: false,
//     inCart: false,
//   },
//   {
//     id: 8,
//     name: "Calvin",
//     image: "assest/jpgs/glasses 2.jpg",
//     price: 12.99,
//     save: false,
//     inCart: false,
//   },
//   {
//     id: 9,
//     name: "Sunny",
//     image: "assest/jpgs/glasses 3.jpg",
//     price: 16.99,
//     save: false,
//     inCart: false,
//   },
//   {
//     id: 10,
//     name: "Mirage",
//     image: "assest/jpgs/glasses 4.jpg",
//     price: 15.99,
//     save: false,
//     inCart: false,
//   },
//   {
//     id: 11,
//     name: "Occhiali",
//     image: "assest/jpgs/glasses 5.jpg",
//     price: 20.99,
//     save: false,
//     inCart: false,
//   },
//   {
//     id: 12,
//     name: "OVL",
//     image: "assest/jpgs/glasses 6.jpg",
//     price: 20.99,
//     save: false,
//     inCart: false,
//   },
// ];
