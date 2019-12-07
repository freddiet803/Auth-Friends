import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../AxiosWithAuth';

const CreateFriend = props => {
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: null,
    email: ''
  });
  const [createdNew, setCreatedNew] = useState({});
  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const createNewFriend = e => {
    e.preventDefault();
    const correctNew = {
      id: Date.now(),
      name: newFriend.name,
      age: newFriend.age,
      email: newFriend.email
    };

    // useEffect(()=>{

    AxiosWithAuth()
      .post('http://localhost:5000/api/friends', correctNew)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert('friend added successfully');
        setCreatedNew(res.data);
        console.log('this is', { correctNew });
        props.history.push('/friends');
      })

      .catch(err => {
        console.log(err);
      });

    //},[])
  };
  return (
    <>
      <div>Create Friend</div>
      <form onSubmit={createNewFriend}>
        <label>
          Name:{' '}
          <input
            type='text'
            name='name'
            value={newFriend.name}
            onChange={handleChange}
            placeholder='name'
          />
        </label>
        <label>
          Age:{' '}
          <input
            type='number'
            name='age'
            value={newFriend.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:{' '}
          <input
            type='text'
            name='email'
            value={newFriend.email}
            onChange={handleChange}
            placeholder='email'
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default CreateFriend;
