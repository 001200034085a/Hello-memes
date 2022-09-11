import React from "react";
import {
    DeleteOutlined 
} from "@ant-design/icons";


export default function ItemReducer({id,name, email, password,onDelete}){
   
    return(
        <div>
            <p>Name: {name}</p>
            <p>Email :{email}</p>
            <p>Password :{password}</p>
            <DeleteOutlined onClick={()=>onDelete(id)} />
        </div>
    )
}
