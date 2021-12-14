import "./App.css"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./DelToEbSend";
import About from "./DelToDelSend";
import Contact from "./DelToDelDisp";
import DelToEbDisp from "./DelToEbDisp";
import Conf from "./page2";
import Conf1 from "./committeedetails";
import Rollcall from "./rollcall";
import ShowRollcall from "./showrollcall"
import Motions from "./motions";
import ShowMotions from "./seemotions"
import Utility from "./utility"
class App extends React.Component{
	render(){
		return(
      <Router>
      <div>
            <Link to="/utility" id="btns">Utility</Link>
            <Link to="/motions" id="btns">Motions</Link><br/>
            <Link to="/DelToDelDisp" id="btns">View all delegate to delegate via eb chits</Link>
            <Link to="/DelToEbDisp" id="btns">View all delegate to eb chits</Link>
            <Link to="/committeedetails" id="btns">View Committee</Link>
            <Link to="/seemotions" id="btns">Show All Motions</Link>
            <Link to="/DelToEbSend" id="btns">Delegate to EB</Link>
            <Link to="/DelToDelSend" id="btns">Delegate to Delegate Via EB</Link>
            <Link to="/showrollcall" id="btns">Show Roll Call</Link>
            <br/>
        <hr />
        <Switch>
          <Route exact path="/DelToEbSend">
            <Home/>
          </Route>
          <Route path="/DelToDelSend">
            <About />
          </Route>
          <Route path="/page2">
            <Conf />
          </Route>
          <Route path="/rollcall">
            <Rollcall />
          </Route>
          <Route path="/DelToDelDisp">
            <Contact />
          </Route>
          <Route path="/DelToEbDisp">
            <DelToEbDisp />
          </Route>
          <Route path="/committeedetails">
            <Conf1 />
          </Route>
          <Route path="/motions">
            <Motions />
          </Route>
          <Route path="/seemotions">
            <ShowMotions />
          </Route>
          <Route path="/utility">
            <Utility />
          </Route>
          <Route path="/showrollcall">
            <ShowRollcall />
          </Route>
        </Switch>
      </div>
    </Router>
		);
	}
}
export default App;
