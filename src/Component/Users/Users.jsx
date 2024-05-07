import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const lodedUser = useLoaderData();
  const [users, setUsers] = useState(lodedUser);

  console.log(users);
  const handleDeleteuser = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Delete succesfully");
        }
        const remaining = users.filter((user) => user._id !== _id);
        setUsers(remaining);
      });
  };

  return (
    <div>
      {users.map((user) => (
        <h2 key={user._id}>
          {user.name}:::::::{user.email}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDeleteuser(user._id)}>X</button>
        </h2>
      ))}
    </div>
  );
};

export default Users;
