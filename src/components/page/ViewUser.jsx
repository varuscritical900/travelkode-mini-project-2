import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { getAllUser } from '../../service/api';
import { TabTitle } from '../../utilities/Title';
import NavBar from '../semantics/Navbar/NavBar';
const userIniatialVal = {
    destTitle: "",
    email: "",
    title: "",
    mobile: "",
    photo: "",
    companyName: "",
    department: ""
}
export default function ViewUser() {
    const [user, setUser] = useState(userIniatialVal);
    const {destTitle, email, title, mobile, photo, companyName, department} = user;
    const {id} = useParams();
    TabTitle(`View User ${destTitle}`)
    const loadUserData = async()=>{
        const response = await getAllUser(id);
        setUser(response.data);
    }
    useEffect(() => {
        loadUserData();
    }, []);
    return (
        <div>
            <NavBar></NavBar>  
    <div className="container">
      
    <div className="row">
            <div className="col-md-6">
                <div className="card my-2 list-group-item-success shadow-lg">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-sm-4">
                                <img style={{ width: 500, height:500}} src={photo} alt="logo"/>
                            </div>
                            <div className="col-sm-7">
                                <ul className="list-group">
                                    <li className="list-group-item">Name: <span className="fw-bold">{destTitle}</span></li>
                                    <li className="list-group-item">Email: <span className="fw-bold">{email}</span></li>
                                    <li className="list-group-item">Mobile: <span className="fw-bold">{mobile}</span></li>   
                                    <li className="list-group-item">Job Description: <span className="fw-bold">{title}</span></li>   
                                    <li className="list-group-item">Company: <span className="fw-bold">{companyName}</span></li>   
                                    <li className="list-group-item">Department: <span className="fw-bold">{department}</span></li>   
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div> 
    </div>
    </div>
  )
}
