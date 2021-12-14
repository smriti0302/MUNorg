import "./App.css"
import React, { useState }  from 'react'
export const AddStaff= ()=> {
    var [motion,setMotion]=useState()
    const motionUpdate=(event)=>{ 
        setMotion(event.target.value)
    }
    var [name,setName]=useState()
    const nameUpdate=(event)=>{ 
        setName(event.target.value)
    }
    var [proposer,setProposer]=useState()
    const proposerUpdate=(event)=>{ 
        setProposer(event.target.value)
    }
    var [duration,setDuration]=useState()
    const durationUpdate=(event)=>{ 
        setDuration(event.target.value)
    }
    var [pst,setPst]=useState()
    const pstUpdate=(event)=>{ 
        setPst(event.target.value)
    }
    const handleSubmit=(e)=> { 
        e.preventDefault()
        const postURL = "http://localhost:4000/motions/" 
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                motion : motion,
                name : name,
				proposer : proposer,
				duration : duration,
                pst : pst
            })
        })
        .then(()=>{
            alert('You have been added to the system!');
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <br/>
            <h1 id="heading">MOTIONS</h1><br/>
                <label for="type" id="heading">TYPE:</label><br/>
                    <select name="type" id="btns" onChange={motionUpdate} >
                    <option value="Open Moderated Caucus">Open Moderated Caucus</option>
                    <option value="Open Unmoderated Caucus">Open Unmoderated Caucus</option>
                    <option value="Extend Moderated Caucus" >Extend Moderated Caucus</option>
                    <option value="Extend Unmoderated Caucus" >Extend Unmoderated Caucus</option>
                    <option value="Close Moderated Caucus" >Close Moderated Caucus</option>
                    <option value="Introduce Draft Resolution" >Introduce Draft Resolution</option>
                    <option value="Vote on Draft Resolution" >Vote on Draft Resolution</option>
                    <option value="Open Debate" >Open Debate</option>
                    <option value="Resume Debate" >Resume Debate</option>
                    <option value="Suspend Debate" >Suspend Debate</option>
                    <option value="Close Debate" >Close Debate</option>
                    </select><br/><br/>   
                    <label id="heading">Name:</label><br/>
                    <input onChange={nameUpdate} type="text" id="btns"></input><br/><br/>
                    <label id="heading">Proposer:</label><br/>
                    <input onChange={proposerUpdate} type="text" id="btns"></input><br/><br/>
                    <label id="heading">Total Duration(in min):</label><br/>
                    <input onChange={durationUpdate} type="text" id="btns"></input><br/><br/>
                    <label id="heading">Per speaker time(in sec):</label><br/>
                    <input onChange={pstUpdate} type="text" id="btns"></input><br/><br/>
                    <button type="submit" id="btns"> Submit</button>
            </form>
        </div>
    )   
}
export default AddStaff
