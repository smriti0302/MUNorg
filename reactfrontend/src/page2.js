import "./App.css"
import React, { useState }  from 'react'
import { useHistory } from "react-router-dom";

export const AddStaff= ()=> {
    let history = useHistory();
    var [committee,setCommittee]=useState()
    const committeeUpdate=(event)=>{ 
        setCommittee(event.target.value)
    }
    var [agenda,setAgenda]=useState()
    const agendaUpdate=(event)=>{ 
        setAgenda(event.target.value)
    }
    var [conf,setConf]=useState()
    const confUpdate=(event)=>{ 
        setConf(event.target.value)
    }
    var [main,setMain]=useState()
    const mainUpdate=(event)=>{ 
        setMain(event.target.value)
    }
    var [b1,setb1]=useState()
    const b1Update=(event)=>{ 
        setb1(event.target.value)
    }
    var [b2,setb2]=useState()
    const b2Update=(event)=>{ 
        setb2(event.target.value)
    }
    var [b3,setb3]=useState()
    const b3Update=(event)=>{ 
        setb3(event.target.value)
    }
    const handleSubmit=(e)=> { 
        e.preventDefault()
        const postURL = "http://localhost:4000/committeedetails/" 
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                committee: committee,
				agenda: agenda,
				conf : conf,
                main : main,
                b1 : b1,
                b2: b2, 
                b3 : b3
            })
        })
        .then(()=>{
            alert('You have been added to the system!');
        })
        history.push("rollcall")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
				<h1 id="heading">Details:</h1>
                <label id="heading">Committee Name:</label><br/><br/>
                <input required onChange={committeeUpdate} id="heading"></input><br/><br/>
				<label id="heading">Agenda:</label><br/><br/>
				<input required onChange={agendaUpdate} id="heading"></input><br/><br/>
				<label id="heading">Conference Name:</label><br/><br/>
				<input required onChange={confUpdate} id="heading"></input><br/>

				<label id="heading">Main Meeting Link:</label><br/><br/>
				<input required onChange={mainUpdate} id="heading"></input><br/>
				<label id="heading">Breakout Room 1:</label><br/><br/>
				<input required onChange={b1Update} id="heading"></input><br/>
				<label id="heading">Breakout Room 2:</label><br/><br/>
				<input required onChange={b2Update} id="heading"></input><br/>
				<label id="heading">Breakout Room 3:</label><br/><br/>
				<input required onChange={b3Update} id="heading"></input><br/>
                <button type="submit" id="btns"> Submit</button>
            </form>
        </div>
    )   
}
export default AddStaff