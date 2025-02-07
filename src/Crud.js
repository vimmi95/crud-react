import React,{useState} from 'react'
import Data from './data.json'
import './Crud.css'

function Crud() {
    const [data, setData] = useState(Data);
    return (
        <div className="tableWrap">
            <div>
            <Addmember/>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                </thead>                
                {
                    data.map((e) =>
                    (
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.phone}</td>
                            <td>
                                <button class="editbtn">Edit</button>
                                <button class="deletebtn">Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>

            </div>
        </div>
    )
}

function Addmember(){

    return(
        <form className="addForm" >
            <input type='text' name="name" placeholder='Enter Name'/>
            <input type='text' name="email" placeholder='Enter Email'/>
            <input type='text' name="phone" placeholder='Enter Phone Number'/>
            <button>Add</button>
        </form>
    )
}

export default Crud;