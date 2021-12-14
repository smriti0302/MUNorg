import "./App.css"
import React, { useState }  from 'react'
export const AddStaff= ()=> {
    var [country,setCountry]=useState()
    const countryUpdate=(event)=>{ 
        setCountry(event.target.value)
    }
    var [present,setPresent]=useState()
    const presentUpdate=(event)=>{ 
        setPresent(event.target.value)
    }
    var [voting,setVoting]=useState()
    const votingUpdate=(event)=>{ 
        setVoting(event.target.value)
    }
    const handleSubmit=(e)=> { 
        e.preventDefault()
        const postURL = "http://localhost:4000/rollcall/" 
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country : country,
				present : present,
				voting : voting
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
				<h1 id="heading">ROLL CALL</h1><br/>
                <label for="countries" id="heading">COUNTRY:</label><br/>
                    <select name="countries" id="btns" onChange={countryUpdate} >
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Aland Islands">Aland Islands</option>
                    <option value="Albania" >Albania</option>
                    <option value="Algeria" >Algeria</option>
                    <option value="American Samoa" >American Samoa</option>
                    <option value="Andorra" >Andorra</option>
                    <option value="Anguilla" >Anguilla</option>
                    <option value="Antigua" >Antigua</option>
                    <option value="Argentina" >Argentina</option>
                    <option value="Armenia" >Armenia</option>
                    <option value="Aruba" >Aruba</option>
                    <option value="Australia" >Australia</option>
                    <option value="Austria" >Austria</option>
                    <option value="Azerbaijan" >Azerbaijan</option>
                    <option value="Bahamas" >Bahamas</option>
                    <option value="Bahrain" >Bahrain</option>
                    <option value="Bangladesh" >Bangladesh</option>
                    <option value="Barbados" >Barbados</option>
                    <option value="Belarus" >Belarus</option>
                    <option value="Belgium" >Belgium</option>
                    <option value="Belize" >Belize</option>
                    <option value="Benin" >Benin</option>
                    <option value="Bermuda" >Bermuda</option>
                    <option value="Bhutan" >Bhutan</option>
                    <option value="Bolivia" >Bolivia</option>
                    <option value="Bosnia" >Bosnia</option>
                    <option value="Botswana" >Botswana</option>
                    <option value="Bouvet Island" >Bouvet Island</option>
                    <option value="Brazil" >Brazil</option>
                    <option value="British Virgin Islands" >British Virgin Islands</option>
                    <option value="Brunei" >Brunei</option>
                    <option value="Bulgaria" >Bulgaria</option>
                    <option value="Burkina Faso" >Burkina Faso</option>
                    <option value="Burundi" >Burundi</option>
                    <option value="Caicos Islands" >Caicos Islands</option>
                    <option value="Cambodia" >Cambodia</option>
                    <option value="Cameroon" >Cameroon</option>
                    <option value="Canada" >Canada</option>
                    <option value="Cape Verde" >Cape Verde</option>
                    <option value="Cayman Islands" >Cayman Islands</option>
                    <option value="Central African Republic" >Central African Republic</option>
                    <option value="Chad" >Chad</option>
                    <option value="Chile" >Chile</option>
                    <option value="China" >China</option>
                    <option value="Christmas Island" >Christmas Island</option>
                    <option value="Cocos Islands" >Cocos Islands</option>
                    <option value="Colombia" >Colombia</option>
                    <option value="Comoros" >Comoros</option>
                    <option value="Congo Brazzaville" >Congo Brazzaville</option>
                    <option value="Congo" >Congo</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica" >Costa Rica</option>
                    <option value="Cote Divoire" >Cote Divoire</option>
                    <option value="Croatia">Croatia</option>
                    </select><br/><br/>     
				<label id="heading">Present:</label><br/><br/>
                <label id="btns">YES</label>
                <input type="radio" id="present" name="present" value="Yes" onChange={presentUpdate}></input>
                <label id="btns">NO</label>
                <input type="radio" id="present" name="present" value="No"  onChange={presentUpdate}></input><br/><br/>
				<label id="heading">Voting:</label><br/><br/>
                <label id="btns" >YES</label>
                <input type="radio" id="present" name="voting" value="Yes" onChange={votingUpdate}></input>
                <label id="btns">NO</label>
                <input type="radio" id="present" name="voting" value="No"  onChange={votingUpdate}></input><br/><br/>
                <button type="submit" id="btns"> Submit</button>
            </form>
        </div>
    )   
}
export default AddStaff
