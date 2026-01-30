import React, { useEffect, useState } from "react";
import axios from "axios";

function UsersCRUD() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // get users

    const getUser = () => {
    axios.get("https://full-stack-backend-rosy.vercel.app/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
    };
useEffect(() => {
    getUser();
  }, []);

  const fetchUser = async () => {
    const res = await axios.get("https://full-stack-backend-rosy.vercel.app/api/users");
    setUsers(res.data);
  };

   
  // create user
  const createUser = async () => {
    if (!name || !age || !email 
    ) {
      alert("All fields required");
      return;
    }


    await axios.post("https://full-stack-backend-rosy.vercel.app/api/users", {
      name,
      age,
      email,
      
      
    });

    alert("New user created");

    setName("");
    setAge("");
    setEmail("");
  
    getUser();
    
  };

  //user delete
  const deleteUser = async (id) => {
    await axios.delete(`https://full-stack-backend-rosy.vercel.app/api/users/${id}`);
    setUsers(users.filter((u) => u._id !== id));
  };

  // edit user fill
  const editUser = (user) => {
    setSelectedId(user._id);
    setName(user.name);
    setAge(user.age);
    setEmail(user.email);
  };

  //user update
  const updateUser = async () => {
    await axios.put(`https://full-stack-backend-rosy.vercel.app/api/users/${selectedId}`, {
      name,
      age,
      email,
      
    });

    alert("User updated");

    setSelectedId(null);
    setName("");
    setAge("");
    setEmail("");

    fetchUser();
  };
  return (
    
    <div className="bg-gradient-to-r from-gray-400 to-blue-400 h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Users CRUD App</h1>

      <div className="border p-4 mb-6 rounded">
        <h2 className="text-xl font-bold mb-3">Create User</h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full rounded-lg"
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-2 w-full rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full
            rounded-lg"
          />
          

          <button
            onClick={selectedId ? updateUser : createUser}
            className={`px-4 text-white ${
              selectedId ? "bg-blue-500 rounded-lg"  : "bg-green-600 rounded-lg"
            }`}
          >
            {selectedId ? "Update" : "Create"}
          </button>
        </div>
      </div>

      {/* 🔹 USERS LIST UI */}
      <div>
        <h2 className="text-xl font-bold mb-3">Users List</h2>

        {users.map((user) => (
          <div
            key={user._id}
            className="border p-4 mb-3 rounded flex justify-between items-center"
          >
            <div>
              <p><b>Name:</b> {user.name}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Age:</b> {user.age}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => editUser(user)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() => deleteUser(user._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
           
          </div>
        ))}

      </div>
     
    </div>
  
  );
}

export default UsersCRUD;
