import "./App.css"
import React, { useState }  from 'react'
export const AddStaff= ()=> {
    var [name,setName]=useState()

    const nameUpdate=(event)=>{ 
        setName(event.target.value)
    }
    var [content,setContent]=useState()
    const chitUpdate=(event)=>{ 
        setContent(event.target.value)
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        console.log(name, content)
        const postURL = "http://localhost:4000/deltoeb" 
        fetch(postURL, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                name: name,
                content: content
            })
        })
        .then(()=>{
            alert('You have been added to the system!');
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
				<h1 id="heading">Delegate to EB:</h1>
                <label id="heading">Country:</label><br/><br/>
                <input required onChange={nameUpdate} id="heading"></input><br/><br/>
				<label id="heading">Content:</label><br/><br/>
				<input required onChange={chitUpdate} id="heading"></input><br/>
                <button type="submit" id="btns"> Submit</button>
            </form>
        </div>
    )   
}
export default AddStaff