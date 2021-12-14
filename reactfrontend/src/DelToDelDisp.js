import "./App.css"
import React, { useEffect, useState } from "react";
const Contact = () => {
	var [alldtd, setAllDtd]= useState([])
	useEffect(() => {
		fetch("http://localhost:4000/alldtd").then((res)=>res.json()).then(data => setAllDtd(data))
	},[])
	return(
		<section className="Contact">
			<h1 id="heading">Delegate to Delegate via EB</h1>
			<br/>
			<br/>
			<br/>
			{alldtd.map((chit)=><div><p id="heading">From : {chit.fromname} To : {chit.toname} Content : {chit.content}</p></div>)}
		</section>
	)
}
export default Contact;