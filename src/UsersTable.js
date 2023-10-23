import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        // Check the response data to make sure that it is an array.
        if (!Array.isArray(response.data)) {
          // Handle the error.
          console.log('The response data is not an array.');
          return;
        }

        setUsers(response.data);
      })
      .catch(error => {
        // Handle the error.
        console.log(error);
      });
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td><img src={user.image} alt={user.firstName} /></td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.domain}</td>
            <td>{user.ip}</td>
            <td>{user.university}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
