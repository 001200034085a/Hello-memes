import * as React from "react";
import {Table} from 'antd';
import { useState, useEffect} from "react";
import axios from "axios";

const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) =>a.name.first > b.name.first ? 1:-1,
      render:(name)=> `${name.title} ${name.first} ${name.last}`
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      filters: [
        {
          text: "Male",
          value: "male",
        },
        {
          text: "Female",
          value: "female",
        },
      ],
      onFilter: (value, record) => {
        return record.gender === value;
      },
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
];

export default function TableUser(){
    const [useList, setUseList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const callApi =async()=>{
       setIsLoading(true);

        const response = await axios({
            method: 'get',
            url: 'https://randomuser.me/api/?results=100',
            type: 'json'
        });

        if(response.status === 200){
            setUseList(response.data.results)
        }
        console.log(response)
        setIsLoading(false);     
    }

    useEffect(()=>{
        callApi();    
    },[]);

    
    
    return(
        <>
        <h2>danh sách thành viên lớp</h2>
          <Table rowKey="email" columns={columns} dataSource={useList} loading={isLoading}  />
        </>
    )
}
