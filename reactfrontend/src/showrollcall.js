import "./App.css"
import React, { useEffect, useState } from "react";
const Contact = (e) => {
	var [allrollcall, setAllRollcall]= useState([])
	useEffect(() => {
		fetch("http://localhost:4000/rollcall").then((res)=>res.json()).then(data => setAllRollcall(data))
	},[])
	return(
		<section className="Contact">
			<h1 id="heading">ROLLCALL:</h1>
			{allrollcall.map((chit)=><p id="heading">COUNTRY : {chit.country} PRESENT : {chit.present} VOTING: {chit.voting}</p>)}
		</section>
	)
}
export default Contact;