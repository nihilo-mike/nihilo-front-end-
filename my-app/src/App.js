import './Styles/nihilo.scss';
import{Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import {Form} from "./Pages/Form"
import{LoginForm} from "./Pages/LoginForm"
 

function App() {

 return (
  <Router>
    <Switch>
     <Route path='/' exact={true} component={LoginForm}/>
     <Route path='/Add' exact={true} component={Form}/>   
     
  </Switch> 
 </Router>
   
  );
}

export default App;
