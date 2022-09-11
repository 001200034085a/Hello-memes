import React, { useReducer, useState } from 'react';
import ItemReducer from './ItemReducer';
import {
    UserAddOutlined 
} from "@ant-design/icons";


export default function FormReducer() {
    const [data, setData] =useState([
        {name:"phú",email:"phu@gmail.com", password:"123456"}
    ]);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

  const initForm = {
    name: '',
    email: '',
    password: '',
  }
  const [formVal, dispatch] = useReducer(
    (curVal, newVal) => ({ ...curVal, ...newVal }),
    initForm,
  )
  const { name, email, password } = formVal
  const onValChange = (event) => {
    const { name, value } = event.target
    dispatch({ [name]: value })
    console.log(formVal)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(newName, newEmail, newPassword);

    setNewName(formVal.name);
    setNewEmail(formVal.email);
    setNewPassword(formVal.password);
    console.log(formVal);
  }

  const onCreate =(name, email, password)=>{
    const newItem = {
        id:Date.now(),
        name:name,
        email:email,
        password:password
    }
    setData([...data,newItem])
  };

  const onDelete =(itemId)=>{
    const newItem = [...data].filter(x=> x.id !== itemId);
    setData(newItem);
  }
  
  return (
    <div>
      <form onSubmit={onSubmit} noValidate>
        <div className="form-group mb-2">
          <label className="mb-2">
            <strong>Name</strong>
          </label>
          <input
            required
            type="text"
            name="name"
            value={name}
            className="form-control"
            onChange={onValChange}
          />
        </div>
        <div className="form-group mb-2">
          <label className="mb-2">
            <strong>Email</strong>
          </label>
          <input
            type="text"
            name="email"
            value={email}
            className="form-control"
            onChange={onValChange}
          />
        </div>
        <div className="form-group mb-2">
          <label className="mb-2">
            <strong>Password</strong>
          </label>
          <input
            type="text"
            name="password"
            value={password}
            className="form-control"
            onChange={onValChange}
          />
        </div>
        <div>
          <button type="submit" >
            <UserAddOutlined />
          </button>
        </div>
      </form>
      {data.map(item=>{
          return(
            <ItemReducer
            key={item.id}
            id={item.id}
            name={item.name}
            password={item.password}
            email={item.email}
            onDelete={onDelete}
             />
          )
      })  
      }
    </div>
  )
}
