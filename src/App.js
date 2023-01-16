// import { Component } from 'react'; 
import { useState } from "react";
import "./App.css"

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [edit,setEdit] = useState(false);
  const [active,setActive] = useState(null);

  const [users,setUsers] = useState([]);

  const addUser = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      age: age,
      phone: phone,
      email: email,
    }

    if(user.name === '' && user.age === '' && user.phone === '' && user.email === '') {
      return window.alert("Fields are Empty")
    }

    console.log("Edit === ",edit)
    if (edit) {
      let copy = users;
      Object.assign(copy[active],user);
      setUsers([...copy])
      setEdit(false);
      setActive(null);
    }else {
      setUsers([...users,user]);
    }
    setName('');
    setEmail('');
    setAge('');
    setPhone('');

  }

  const onEditClick = (index) => {
    const user = users[index];
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setAge(user.age);

    setActive(index);
    setEdit(true);
  }

  const onDeleteClick = (user) => {
    if(window.confirm('Are you sure you want to delete')) {
      let copy = users.filter(item => item !== user);
      
      setUsers([...copy]); 
    }

    
    // delete user
  }

  return (
    <div className='App'>
      <h1>CRUD Application</h1>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <form onSubmit={addUser}>
              <div className='form-group'>
                <label htmlFor=''>Name</label>
                <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Age</label>
                <input type="text" className='form-control' pattern="^[0-9\b]+$" value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Phone</label>
                <input type="number" className='form-control' pattern="^[0-9\b]+$" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Email</label>
                <input type="email" className='form-control' pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <button className='btn btn-success form-control'>{edit ? "Update" : "Add"}</button>
            </form>

          </div>

        </div>

      </div>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user,index) => {
              return ( <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td><button className="btn btn-info" onClick={() => onEditClick(index)}>Edit</button></td>
                <td><button className="btn btn-danger" onClick={() => onDeleteClick(user)}>Delete</button></td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}
export default App;