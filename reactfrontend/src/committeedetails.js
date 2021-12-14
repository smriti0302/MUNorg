import "./App.css"
import React, { useEffect, useState } from "react";
const Contact = () => {
	var [committee, setCommittee]= useState([])
	useEffect(() => {
		fetch("http://localhost:4000/committeedetails").then((res)=>res.json()).then(data => setCommittee(data))
	},[])
	return(
		<section className="Contact">
			<h1 id="heading">About Committee:</h1>
			<br/>
			<br/>
			<br/>
			{committee.map((chit)=><div>
            <p id="heading">
            Committee : {chit.committee} 
            Agenda : {chit.agenda} 
            Conference : {chit.conf}
            B1 : {chit.b1}
            B2 : {chit.b2}
            B3 : {chit.b3}
            </p>
            <a href={chit.main}>CLICK</a></div>)}
		</section>
	)
}
export default Contact;