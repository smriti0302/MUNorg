import "./App.css"
import React, { Component } from 'react'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        seconds:0,
        name: "",
        proposer: "",
        duration: 0,
        country : "",
        pst: "",
        now : {country:"", duration:""},
        queue : []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChangeName = event => {
    this.setState({
        name: event.target.value,
    });
}
handleChangeProposer = event => {
    this.setState({
        proposer: event.target.value,
    });
}
handleChangeDuration = event => {
    this.setState({
        duration: event.target.value,
    });
}
handleChangePst = event => {
    this.setState({
        pst: event.target.value,
    });
}
onStart=()=>{
   this.setState({seconds:this.state.seconds+1});
}
timer=()=>{
  this.f=setInterval(this.onStart,1000);
  document.getElementById('btn').disabled=true;
}
onPause=()=>{
    clearInterval(this.f);
}
onReset=()=>{
    clearInterval(this.f);
    document.getElementById('btn').disabled=false;
    this.setState({seconds:0})
}
handleChangeCountry=(e)=>{
    this.setState({country:e.target.value});
    console.log(e.target.value);
}
stage=()=>{
    this.setState(prev =>{
        var prevqueue = prev.queue.filter((x, index) => index!=0);
        var now = prev.queue[0];
        console.log(prevqueue);
        return {
            ...prev, now:now, queue: prevqueue
        }
    });
    // console.log("stage:", this.state)
}
handleSubmit = function (event) {
    event.preventDefault();
    this.setState(prev => ({...prev, queue: [...prev.queue, {country: prev.country, duration: prev.duration}]}))
    // console.log("State : ", this.state)
}
render(){
    return(
        <div id="container">
            <h1>Now</h1>
            {this.state.now.country}    
            <div id="stopwatch">
                <h1 id="btns">TIMER:</h1>
                <h1 id="heading">{this.state.seconds}</h1>
                <button id='btn' onClick={this.timer}>Start</button>
                <button id="btns"onClick={this.onPause}>Stop</button>
                <button id="btns" onClick={this.onReset}>Reset</button>
            </div>
            <div id="stage">
                <h1>Next</h1>
                {this.state.queue.map(delegate=><p>{delegate.country}   {delegate.duration}</p>)}
                <button id="btns" onClick= {this.stage}>STAGE</button>
            </div>
            <div id="disp">
                <h1 id="heading">Queue</h1>
                <form>
                <label id="heading">COUNTRY:</label><br/>
                    <select name="countries"onChange={this.handleChangeCountry} id="btns" >
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
                    <label id="heading">
                    Duration(in sec):
                    </label>
                    <input value={this.state.duration} onChange={this.handleChangeDuration} type="text" id="btns"></input>
                    <input type="submit" onClick={this.handleSubmit} value="QUEUE" id="btns"/>
                </form>
            </div>
            <br/>
            <br/>

        </div>
    )
}
}
export default App
