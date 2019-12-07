import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../AxiosWithAuth';
import Friend from './Friend';
import '../App.css';
import { Link } from 'react-router-dom';
const FriendsList = props => {
  const [friendsList, setFriendslist] = useState([]);

  // const createNewFriend = e => {
  //   e.preventDefault();
  //   props.history.push('/createfriend');
  // };

  useEffect(() => {
    const getFriends = () => {
      AxiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
          console.log(res);
          console.log(res.data);
          setFriendslist(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };

    getFriends();
  }, []);

  return (
    <>
      <div className='friendsList'>
        {friendsList.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
      <div>
        <Link to='/createFriend'>
          <button>Add Friend</button>
        </Link>
      </div>
    </>
  );
};

export default FriendsList;
