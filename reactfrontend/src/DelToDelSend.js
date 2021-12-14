import "./App.css"
import React, { useState }  from 'react'
export const AddStaff= ()=> {
    var [toname,setToName]=useState()
    const tonameUpdate=(event)=>{ 
        setToName(event.target.value)
    }
    var [fromname,setFromName]=useState()
    const fromnameUpdate=(event)=>{ 
        setFromName(event.target.value)
    }
    var [content,setContent]=useState()
    const chitUpdate=(event)=>{ 
        setContent(event.target.value)
    }
    const handleSubmit=(e)=> { 
        e.preventDefault()
        const postURL = "http://localhost:4000/deltodel/" 
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                toname: toname,
				fromname: fromname,
				content : content
            })
        })
        .then(()=>{
            alert('You have been added to the system!');
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
				<h1 id="heading">Delegate to Delegate via EB:</h1>
                <label id="heading">From Country:</label><br/><br/>
                <input required onChange={fromnameUpdate} id="heading"></input><br/><br/>
				<label id="heading">To Country:</label><br/><br/>
				<input required onChange={tonameUpdate} id="heading"></input><br/><br/>
				<label id="heading">Content:</label><br/><br/>
				<input required onChange={chitUpdate} id="heading"></input><br/>
                <button type="submit" id="btns"> Submit</button>
            </form>
        </div>
    )   
}
export default AddStaff