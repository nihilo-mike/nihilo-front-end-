import './Styles/nihilo.scss';
import{Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import {Form} from "./Pages/Form"
import{LoginForm} from "./Pages/LoginForm";
import{DashBoard}from"./Pages/DashBoard";
import{Balance}from "./Pages/Balance";
import{Income}from"./Pages/Income";
function App() {

 return (
  <Router>
    <Switch>
     <Route path='/' exact={true} component={LoginForm}/>
     <Route path='/Add' exact={true} component={Form}/> 
     <Route path='/Dashboard' exact={true}component={DashBoard}/>
     <Route path='/Balance'  exact={true}component={Balance}/>
     <Route path='/Income'exact={true}component={Income}/>

    
     
  </Switch> 
 </Router>
   
  );
}

export default App;
