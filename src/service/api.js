import axios from "axios";

// const urlUser = "http://127.0.0.1:8000/user";
// const urlDept = "http://127.0.0.1:8000/department";

const urlUser = "https://live-json-server-gtzd.onrender.com/user";
const urlDept = "https://live-json-server-gtzd.onrender.com/department";

//get all Records or by ID
export const getAllUser = async(id) => {
        try {
            id = id || "";
            return await axios.get(`${urlUser}/${id}`);
        } catch (error) {
            console.log(error);
        }
    }
    //Delete Records by id
export const deleteUser = async(id) => {
    return await axios.delete(`${urlUser}/${id}`);
}

//Add new User
export const addUser = async(user) => {
        return await axios.post(urlUser, user);
    }
//Edit User
export const editUser = async(id, user) => {
        return await axios.put(`${urlUser}/${id}`, user);
    }
    //search User by Name
export const searchUser = async(name) => {
        return await axios.get(`${urlUser}?name=${name}`);
    }
    //get Department 
export const getDepartment = async(id) => {
    id = id || "";
    return await axios.get(`${urlDept}/${id}`);
}