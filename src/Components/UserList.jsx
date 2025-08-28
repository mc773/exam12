import React, { useEffect, useState } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <h2 className="text-xl font-semibold mb-4">Foydalanuvchilar Ro‘yxati</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-2">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
