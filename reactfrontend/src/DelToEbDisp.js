import "./App.css"
import React, { useEffect, useState } from "react";
const Contact = (e) => {
	var [alldte, setAllDte]= useState([])
	useEffect(() => {
		fetch("http://localhost:4000/alldte").then((res)=>res.json()).then(data => setAllDte(data))
	},[])
	return(
		<section className="Contact">
			<h1 id="heading">Delegate to EB</h1>
			{alldte.map((chit)=><p id="heading">From : {chit.name} Content : {chit.content}</p>)}
		</section>
	)
}
export default Contact;