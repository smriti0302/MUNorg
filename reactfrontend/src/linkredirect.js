import React, { useEffect, useState } from "react";
const Contact = () => {
	var [alllinks, setAllLinks]= useState([])
	useEffect(() => {
		fetch("http://localhost:4000/committeedetails").then((res)=>res.json()).then(data => setAllLinks(data))
	},[])
	return(
		<section className="Contact">
			<h1 id="heading">Links</h1>
			<br/>
			{alllinks.map((chit)=>
            <div><p id="heading">
                Main Link : {chit.conf} <br/>
                Breakout Room 1 : {chit.b1} <br/>
                Breakout Room 2 : {chit.b2} <br/>
                Breakout Room 3 : {chit.b3} <br/>
            </p></div>)}
		</section>
	)
}
export default Contact;