import React from 'react';
import '../App.css';

const Friend = props => {
  return (
    <>
      <div className='friend'>
        <h1>Name: {props.friend.name}</h1>
        <p>Email: {props.friend.email}</p>
        <p>Age: {props.friend.age}</p>
      </div>
    </>
  );
};

export default Friend;
