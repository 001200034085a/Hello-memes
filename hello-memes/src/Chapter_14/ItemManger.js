import React, { useState } from "react";
import { Avatar, List, Row, Col } from 'antd';
import {
    DeleteOutlined
  } from '@ant-design/icons';

export default function ItemManger(props){
    const { avatar, gender, email, first_name, last_name, address, textarea, id, deletePeople, onEdit} = props;

    const [show, setShow] = useState(false);
    const [newAvatar, setNewAvatar] = useState('');
    const [newGender, setNewGender] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newTextarea, setNewTextarea] =useState('');
    const [newFirst_Name, setNewFirst_Name] = useState('');
    const [newLast_Name, setNewLast_Name] = useState('');

    const AnbleEdit = ()=>{
        setShow(true);
    }

    const Edit =()=>{
        setShow(false);

        onEdit(id, newFirst_Name, newLast_Name, newAddress, newGender, newAvatar, newEmail, newTextarea);

        setNewAddress('');
        setNewAvatar('');
        setNewEmail('');
        setNewFirst_Name('');
        setNewLast_Name('');
        setNewTextarea('');
        setNewGender('');

    }
    
    
    return(
        <div>
            <List.Item>
                    <List.Item.Meta
                       avatar={show ? <input type="text" placeholder="ảnh" onChange={(event)=>setNewAvatar(event.target.value)}/>:<Avatar src={avatar} />}
                       title={show ? <div><input type="text" placeholder="first_name" onChange={(event)=>setNewFirst_Name(event.target.value)}  /><Col><input type="text" placeholder="first_name" onChange={(event)=>setNewLast_Name(event.target.value)}  /></Col></div>:<a href="https://ant.design">name: {`${first_name} ${last_name}`}</a>}
                       description={
                        <div>
                            
                            <Row>
                                <Col>email:</Col>&nbsp;
                                {show ? <input type="email" onChange={(event)=>setNewEmail(event.target.value)} />:<Col>{email}</Col>}
                            </Row> 
                            <Row>
                                <Col>gender:</Col>&nbsp;
                                {show ? <div>nam:<input type="checkbox" onClick={()=>setNewGender('nam')} /><Col>nữ:<input type="checkbox" onClick={()=>setNewGender('nữ')} /></Col></div>:<Col>{gender}</Col>}
                            </Row>
                            <Row>
                                <Col>address:</Col>&nbsp;
                                {show ? <input type="text" onChange={(event)=>setNewAddress(event.target.value)} />:<Col>{address}</Col>}
                            </Row>
                            <Row>
                                <Col>textarea:</Col>&nbsp;
                                {show ? <input type="text" onChange={(event)=>setNewTextarea(event.target.value)} />:<Col>{textarea}</Col>}
                            </Row>
                            
                        </div>
                       }
                    />
                    {show ? <button onClick={Edit}>lưu</button>:<button onClick={AnbleEdit}>sửa</button>}
                    <DeleteOutlined onClick={()=>deletePeople(id)} />
                </List.Item>
        </div>
    )
}
