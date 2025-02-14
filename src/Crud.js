import React,{useState} from 'react'
import Data from './data.json'
import './Crud.css'

function Crud() {
    const [data, setData] = useState(Data);
    return (
        <div className="tableWrap">
            <div>
            <Addmember setData={setData}/>
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

function Addmember({setData}){
    
    function hanldeValues(event){
        event.preventDefault();
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const phone = event.target.elements.phone.value;
        const newData = {
            id: Math.floor(Math.random() * 900) + 100, // Create random number of 3 digits
            name,
            email,
            phone,
        }
        setData(prevData => prevData.concat(newData))
    }

    return(
        <form className="addForm" onSubmit={hanldeValues} >
            <input type='text' name="name" placeholder='Enter Name'/>
            <input type='text' name="email" placeholder='Enter Email'/>
            <input type='text' name="phone" placeholder='Enter Phone Number'/>
            <button>Add</button>
        </form>
    )
}

export default Crud;