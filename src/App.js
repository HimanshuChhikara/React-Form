// import { Component } from 'react'; 
import { Component } from "react";
import "./App.css"

// function App() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [edit,setEdit] = useState(false);
//   const [active,setActive] = useState(null);

// const [users,setUsers] = useState([]);

// const addUser = (e) => {
//   e.preventDefault();

//   const user = {
//     name: name,
//     age: age,
//     phone: phone,
//     email: email,
//   }

// if(user.name === '' || user.age === '' || user.phone === '' || user.email === '') {
//   return window.alert("Fields are Empty")
// }

//     console.log("Edit === ",edit)
//     if (edit) {
//       let copy = users;
//       Object.assign(copy[active],user);
//       setUsers([...copy])
//       setEdit(false);
//       setActive(null);
//     }else {
//       setUsers([...users,user]);
//     }
//     setName('');
//     setEmail('');
//     setAge('');
//     setPhone('');

//   }

//   const onEditClick = (index) => {
//     const user = users[index];
//     setName(user.name);
//     setEmail(user.email);
//     setPhone(user.phone);
//     setAge(user.age);

//     setActive(index);
//     setEdit(true);
//   }

//   const onDeleteClick = (user) => {
//     if(window.confirm('Are you sure you want to delete')) {
//       let copy = users.filter(item => item !== user);

//       setUsers([...copy]); 
//     }


//     // delete user
//   }

//   return (
//     <div className='App'>
//       <h1>CRUD Application</h1>
//       <div className='container'>
//         <div className='row'>
//           <div className='col'>
//             <form onSubmit={addUser}>
//               <div className='form-group'>
//                 <label>Name</label>
//                 <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
//               </div>
//               <div className='form-group'>
//                 <label>Age</label>
//                 <input type="text" className='form-control' pattern="^[0-9\b]+$" value={age} onChange={(e) => setAge(e.target.value)} />
//               </div>
//               <div className='form-group'>
//                 <label>Phone</label>
//                 <input type="number" className='form-control' pattern="^[0-9\b]+$" value={phone} onChange={(e) => setPhone(e.target.value)} />
//               </div>
//               <div className='form-group'>
//                 <label>Email</label>
//                 <input type="email" className='form-control' pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}" value={email} onChange={(e) => setEmail(e.target.value)} />
//               </div>
//               <button className='btn btn-success form-control'>{edit ? "Update" : "Add"}</button>
//             </form>

//           </div>

//         </div>

//       </div>
//       <table className="table table-bordered mt-5">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             users.map((user,index) => {
//               return ( <tr>
//                 <td>{user.name}</td>
//                 <td>{user.age}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.email}</td>
//                 <td><button className="btn btn-info" onClick={() => onEditClick(index)}>Edit</button></td>
//                 <td><button className="btn btn-danger" onClick={() => onDeleteClick(user)}>Delete</button></td>
//               </tr>)
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   )
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: [],
      setName: '',
      setAge: '',
      setEmail: '',
      setPhone: '',
      setEdit: false,
      setActive: null,
    }
  }

  // componentDidMount() {
  //   this.setState(() => {
  //     return {user: }
  //   })
  // }

  addUser = (e) => {
    e.preventDefault();
    let {setEmail,setName,setPhone,setAge} = this.state;

    if(setEmail=== '' || setName === '' || setAge === '' || setPhone === '') {
      return window.alert("Fields are empty")
    }

    const userData = {
      name: this.state.setName,
      age: this.state.setAge,
      phone: this.state.setPhone,
      email: this.state.setEmail
    }

    if(this.state.setEdit) {
      let copy = this.state.user;
      Object.assign(copy[this.state.setActive],userData);
      this.setState(()=> {return {user: copy}});
      this.setState(() => {return {setEdit:false, setActive:null}})

    }
    else {
      this.setState(() => { return { user: [...this.state.user,userData] } }, () => { console.log(this.state) })
      this.setState(() => { return { setName: '', setEmail: '', setAge: '', setPhone: '' } })
    }
  }

  onEditClick = (index) => {
    const editUser = this.state.user[index];
    this.setState(()=> {return {setEdit:true}},()=>{console.log(this.state)});
    this.setState(() => {return {setName:editUser.name,setAge:editUser.age,setEmail:editUser.email,setPhone:editUser.phone}})
    this.setState({setActive: index});
  }
  onDeleteClick = (index) => {
    window.alert("Are you sure you  want to delete this user ?");
    let userData = this.state.user[index];
    let copy = this.state.user.filter((item) => item !== userData)
    this.setState(()=> {return {user:copy}})
  }
  
  changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })

  }
  render() {
    return (
      <div>
        <h1>CRUD Application</h1>
        <form>
          <label>Name</label>
          <input type="text" className='form-control' name="setName" value={this.state.setName} onChange={this.changeHandler} />
          <label>Age</label>
          <input type="number" className='form-control' name="setAge" value={this.state.setAge} onChange={this.changeHandler} />
          <label>Phone</label>
          <input type="number" className='form-control' name="setPhone" value={this.state.setPhone} onChange={this.changeHandler} />
          <label>Email</label>
          <input type="email" className='form-control' name="setEmail" value={this.state.setEmail} onChange={this.changeHandler} />
        </form>
        <button className='btn btn-success form-control' onClick={this.addUser}>{this.state.setEdit ? "Update" : "Add"}</button>
        <div>
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
                this.state.user.map((u, index) => {
                  // console.log("U is == ", u)
                  return (

                    <tr key={index}>
                      <td>{u.name}</td>
                      <td>{u.age}</td>
                      <td>{u.phone}</td>
                      <td>{u.email}</td>
                      <td><button className="btn btn-info" onClick={() => this.onEditClick(index)}>Edit</button></td>
                      <td><button className="btn btn-danger" onClick={() => this.onDeleteClick(index)}>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default App;