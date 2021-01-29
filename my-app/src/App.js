import Header from "./Components/Header";
import './Styles/nihilo.scss';
import Transactions from "./Components/Transactions";
import {AddCredit} from "./Components/AddCredit";
import {DataProvider} from "./Contexts/DataContext";
import { Results} from "./Pages/Results";
import {AddDebit} from "./Components/AddDebit";
 

function App() {

 
  return (
   <div>
    <Header/> 
    <DataProvider>  
    <AddCredit/>
    <br></br>
    <AddDebit/>
    <Results/>
    <Transactions/>

   </DataProvider> 
    
    
    
   </div>
 
   
  );
}

export default App;
