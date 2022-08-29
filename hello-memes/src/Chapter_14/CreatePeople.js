import React, { useState } from "react";
import { Avatar, List, Row, Col, notification, message, Popconfirm } from 'antd';

export default function CreatePeople(props){
   const { onCreate } =props;

    const [newFirst_Name, setNewFirst_Name] = useState('');
    const [newLast_Name, setNewLast_Name]  =useState('');
    const [newEmail, setNewEmail]  = useState('');
    const [newGender, setNewGender] = useState('');
    const [newAvatar, setNewAvatar] = useState('');
    const [newAddress, setNewAddress] =useState('');
    const [newTextarea, setNewTextarea] = useState('');
    const [show, setShow] = useState(false);

    const handleCreate = (event)=>{
        event.preventDefault();
        

        setNewLast_Name('');
        setNewFirst_Name('');
        setNewAvatar('');
        setNewAddress('');
        setNewEmail('');
        setNewGender('');
        setNewTextarea('');

        onCreate(newFirst_Name, newLast_Name, newEmail, newGender, newAvatar, newAddress, newTextarea);

        setShow(false);

    };

 
   return(
    <div>
        {show ? <form onSubmit={handleCreate} >
            <input type="text" placeholder="first_name" onChange={(event)=>setNewFirst_Name(event.target.value)} required /><br/><br/>
            <input type="text" placeholder="last_name" onChange={(event)=>setNewLast_Name(event.target.value)} required /><br/><br/>
            <input type="email" placeholder="email" onChange={(event)=>setNewEmail(event.target.value)} required /><br/><br/>
            <div>nam:<input type="checkbox"onClick={()=>setNewGender("nam")} /><Col>nữ:<input type="checkbox" onClick={()=>setNewGender('nữ')} /></Col></div>
            <input type="text" placeholder="avatar" onChange={(event)=>setNewAvatar(event.target.value)} required /><br/><br/>
            <input type="text" placeholder="address" onChange={(event)=>setNewAddress(event.target.value)} required /><br/><br/>
            <input type="text" placeholder="textarea" onChange={(event)=>setNewTextarea(event.target.value)} required /><br/><br/>
            <button type="submit">add</button>
        </form>:<button onClick={()=>setShow(true)}>➕</button>}
        
    </div>
    
   )
}
