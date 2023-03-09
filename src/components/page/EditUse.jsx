import React from 'react'
import { useState, useEffect } from 'react';
import { getDepartment, getAllUser, editUser} from '../../service/api';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { TabTitle } from '../../utilities/Title';
import NavBar from '../semantics/Navbar/NavBar';
const userCapturedVal = {
    destTitle: "",
    email: "",
    title: "",
    mobile: "",
    photo: "",
    companyName: "",
    department: ""
}

export default function EditUse() {
  TabTitle('Create New User');
  //set captured value from client 
  const [user, setUser] = useState(userCapturedVal);
  const {destTitle, email, title, mobile, photo, companyName, department} = user;
  const {id} = useParams();
    //get  user
const getUser = async ()=>{
  const response = await getAllUser(id)
  setUser(response.data)
  
}
 //function captured value from client 
   const onValueChange =(e)=>{
     setUser({...user, [e.target.destTitle]: e.target.value});
     console.log(user)
   }

   // useNavigate to redirect to specific route
 let redirect = useNavigate();
 
 //edit user by id
 const editUserDetails = async()=>{
  await editUser(id, user)
  redirect('/all')
 }
   //render deparment and user details
   const [dept, setDept] = useState([]);
     useEffect(() =>{
         getAllDept();
         getUser();
     }, []);
     
     const getAllDept = async () =>{
         const response = await getDepartment();
         console.log(response);
         setDept(response.data);
     } 
     
   return (
     <div className="container mt-3">
     <NavBar></NavBar>    
     <h1>Edit Page</h1>
         <div className="row">
             <div className="col-md-5">
                 <form>
                     <div className="mb-2">
                         <input type="text" placeholder={destTitle} 
                             onChange={(e)=> onValueChange(e)} name="name" value={destTitle}
                         />
                     </div>
                     <div className="mb-2">
                         <input type="text" placeholder="Photo Url"
                             onChange={(e)=> onValueChange(e)} name="photo" value={photo}
                         />
                     </div>
                     <div className="mb-2">
                         <input type="email" placeholder="Enter Email"
                             onChange={(e)=> onValueChange(e)} name="email" value={email}
                         />
                     </div>
                     <div className="mb-2">
                         <input type="text" placeholder="Mobile"
                             onChange={(e)=> onValueChange(e)} name="mobile" value={mobile}
                         />
                     </div>
                     <div className="mb-2">
                         <input type="text" placeholder="Enter Company Name"
                             onChange={(e)=> onValueChange(e)} name="companyName" value={companyName}
                         /> 
                     </div>
                     <div className="mb-2">
                         <input type="text" plac eholder="Enter Job Title"
                             onChange={(e)=> onValueChange(e)} name="title" value={title}
                         />
                     </div>
                     <div className="mb-2">
                         <select  onChange={(e)=> onValueChange(e)} name="department" value={department}>
                             <option disabled>Select Group</option>
                             {
                                 dept.map((data) =>(
                                     <option>
                                         {data.departmentName}
                                     </option>
                                 ))
                             }
                         </select>
                     </div>
                     <div className="mb-2">
                         <input type="sumbit" className="btn btn-primary" onClick={()=> editUserDetails()} value="Update"/> 
                     </div>
                 </form>
             </div>
             <div className="col-md-4">
                 <img style={{with: 200, height:200}} src={photo} alt="logo"/>
             </div> 
         </div>
     </div>
   )
}
