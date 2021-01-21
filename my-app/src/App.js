import Header from "./Components/Header";
import './Styles/nihilo.scss';
import {DataProvider}from "./Contexts/DataContext"
import { AddCredit} from "./Components/AddCredit";
import { Results,Pages } from "./Pages/Results";
import { AddDebit } from "./Components/AddDebit";
 

function App() {
  
 
  return (
   <div style={{background:"black"}}>
    <Header/>       
   <DataProvider>
     <h3 style={{color:"white"}}>CreditTransactions</h3>
    <AddCredit/>
    <h3 style={{color:"white"}}>DebitTransactions</h3>
    <AddDebit/>
    <Pages/>
   </DataProvider>


   </div>
 
   
  );
}

export default App;