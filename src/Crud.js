import React,{useState, useRef} from 'react'
import Data from './data.json'
import './Crud.css'

function Crud() {
    const [data, setData] = useState(Data)
    const [editState, setEditState] = useState(-1) // -1 Because we donot have  -1 Id in our data list    
    return (
        <div className="tableWrap">
            <div>
            <Addmember setData={setData}/>
            <form onSubmit={handleUpdate}>
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
                        editState === e.id ? <EditMember current={e} data={data} setData={setData} /> :
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.phone}</td>
                            <td>
                                <button type="button" class="editbtn" onClick={() => hanldeEdit(e.id)}>Edit</button>
                                <button type="button" class="deletebtn" onClick={() => hanldeDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleUpdate(event){
        event.preventDefault() // prevent page from refreshing
        return (
        setEditState(-1)
        )
    
    }
    function hanldeEdit(id){
        setEditState(id)
    }

    function hanldeDelete(id){
        // If the current id is not equal to the passed id then create a new array using the filter function and will pass all the unequal ids in it.
        const updatedData = data.filter((d) => id !== d.id) 
        setData(updatedData)
    }
}

function EditMember({current, data, setData}) {
    function handleName(event) {
        const name= event.target.value; // access the value
        // if the edit id is equal to the current id then it should update the name or return the same value.
        const newName = data.map((d) => d.id === current.id ? {...d,name:name} : d) 
        setData(newName) // update the new data into the dataset
    }
    function handleEmail(event) {
        const email= event.target.value; // access the value
        const newEmail = data.map((d) => d.id === current.id ? {...d,email:email} : d) 
        setData(newEmail) // update the email data into the dataset
    }
    function handlePhone(event) {
        const phone= event.target.value; // access the value
        const newPhone = data.map((d) => d.id === current.id ? {...d,phone:phone} : d) 
        setData(newPhone) // update the phone data into the dataset
    }
    

    return (
        <tr>
            <td><input type='text' value={current.name} onChange={handleName} name="name" placeholder='Enter Name' /></td>
            <td><input type='text' value={current.email} onChange={handleEmail}name="email" placeholder='Enter Email' /></td>
            <td><input type='text' value={current.phone}  onChange={handlePhone} name="phone" placeholder='Enter Phone Number' /></td>
            <td><button type="submit">Update</button></td>
        </tr>
    )
}

function Addmember({setData}){
    const nameOld = useRef(null)
    const emailOld = useRef(null)
    const phoneOld = useRef(null)

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
        nameOld.current.value = ""
        emailOld.current.value =""
        phoneOld.current.value = ""
    }

    return(
        <form className="addForm" onSubmit={hanldeValues} >
            <input type='text' name="name" placeholder='Enter Name' ref={nameOld}/>
            <input type='text' name="email" placeholder='Enter Email' ref={emailOld}/>
            <input type='text' name="phone" placeholder='Enter Phone Number' ref={phoneOld}/>
            <button>Add</button>
        </form>
    )
}

export default Crud;