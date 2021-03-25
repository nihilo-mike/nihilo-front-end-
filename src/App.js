import './Styles/nihilo.scss';
import{Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import {Form,
       LoginForm,
       DashBoard,
       Balance,
       Income,
       AnalysisPage,
       TransactionsPage} from "./Pages/index"
import {useData} from "./Contexts/DataContext"

const PrivateRoute = ({ component, ...options }) => {
  const{user}=useData();
  const finalComponent = user ? component : LoginForm;
 return <Route {...options} component={finalComponent} />;
};
function App() {

 return (
  <Router>
    <Switch>
     <Route path='/' exact={true} component={LoginForm}/>
     <PrivateRoute path='/Add' exact={true} component={Form}/> 
     <PrivateRoute path='/Dashboard' exact={true}component={DashBoard}/>
     <PrivateRoute path='/Balance'  exact={true}component={Balance}/>
     <PrivateRoute path='/Income'exact={true}component={Income}/>
     <PrivateRoute path='/Analysis'exact={true}component={AnalysisPage}/>
     <PrivateRoute path='/Transactions'exact={true}component={TransactionsPage}/>  
  </Switch> 
 </Router>
   
  );
}

export default App;
