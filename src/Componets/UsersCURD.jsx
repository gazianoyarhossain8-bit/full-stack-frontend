import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UsersCRUD() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gmail, setGmail] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  // get users
  
 
    const fetchUser = async() =>{
    const token = localStorage.getItem("token")

    if (!token){
      navigate("/login");
      return
    }
    try {
      const res = await axios.get("https://full-stack-backend-i3ik1pqi7-anoyars-projects.vercel.app/api/users",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('profile response', res.data)
      setUsers(res.data)

    }catch(err){
      console.log('user fetch error:', err)
      if(err.response?.status === 401){
        localStorage.removeItem("token");
        navigate("/login")
      }

    }

  };
    useEffect(() => {
    fetchUser();
  }, [navigate]);

   
  // create user
  const createUser = async () => {
    if (!name || !age || !gmail 
    ) {
      alert("All fields required");
      return;
    }

    await axios.post("https://full-stack-backend-i3ik1pqi7-anoyars-projects.vercel.app/api/users", {
      name,
      age,
      gmail,
      
      
    });

    alert("New user created");

    setName("");
    setAge("");
    setGmail("");
  
fetchUser()
    
  };

  //user delete
  const deleteUser = async (id) => {
    await axios.delete(`https://full-stack-backend-i3ik1pqi7-anoyars-projects.vercel.app/api/users/${id}`);
    setUsers(users.filter((u) => u._id !== id));
  };

  // edit user fill
  const editUser = (user) => {
    setSelectedId(user._id);
    setName(user.name);
    setAge(user.age);
    setGmail(user.gmail);
  };

  //user update
  const updateUser = async () => {
    await axios.put(`https://full-stack-backend-i3ik1pqi7-anoyars-projects.vercel.app/api/users/${selectedId}`, {
      name,
      age,
      gmail,
      
    });

    alert("User updated");

    setSelectedId(null);
    setName("");
    setAge("");
    setGmail("");

    fetchUser();
  };
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login")
  }
  return (
    
    <div className="p-6 max-w-4xl mx-auto bg-gray-400 rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Users CRUD App</h1>

{/* create user*/}
      <div className="border p-4 mb-6 rounded">
        <h2 className="text-xl font-bold mb-3">Create User</h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-2 w-full"
          />

          <input
            type="email"
            placeholder="Email"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            className="border p-2 w-full"
          />
          

          <button
            onClick={selectedId ? updateUser : createUser}
            className={`px-4 text-white ${
              selectedId ? "bg-blue-500" : "bg-green-600"
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
              <p><b>Email:</b> {user.gmail}</p>
              <p><b>Age:</b> {user.age}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => editUser(user)}
                className="bg-yellow-500 text-white px-3 py-1"
              >
                Edit
              </button>

              <button
                onClick={() => deleteUser(user._id)}
                className="bg-red-500 text-white px-3 py-1"
              >
                Delete
              </button>
            </div>
           
          </div>
        ))}
         <button
  onClick={logout}
  className="block mx-auto mt-6 bg-black text-white px-6 py-2 rounded"
>
  LogOut
</button>

      </div>
     
    </div>
  
  );
}

export default UsersCRUD;
