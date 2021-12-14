import "./App.css"
import React, { useEffect, useState } from "react";
const Contact = (e) => {
	var [allmotions, setAllMotions]= useState([])
	useEffect(() => {
		fetch("http://localhost:4000/motions").then((res)=>res.json()).then(data => setAllMotions(data))
	},[])
	return(
		<section className="Contact">
			<h1 id="heading">ALL MOTIONS:</h1>
			{allmotions.map((chit)=><p id="heading">MOTION TYPE : {chit.motion} MOTION NAME : {chit.name} PROPOSER : {chit.proposer} DURATION: {chit.duration}  PER SPEAKER TIME: {chit.pst}</p>)}
		</section>
	)
}
export default Contact;