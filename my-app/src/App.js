import Header from "./Components/Header";
import './Styles/nihilo.scss';
import {DataProvider}from "./Contexts/DataContext"
import { AddCredit} from "./Components/AddCredit";

import { AddDebit } from "./Components/AddDebit";
import { Results } from "./Pages/Results";
 

function App() {
  
 
  return (
   <div style={{background:"black"}}>
    <Header/>       
   <DataProvider>
     <h3 style={{color:"white"}}>CreditTransactions</h3>
    <AddCredit/>
    <h3 style={{color:"white"}}>DebitTransactions</h3>
    <AddDebit/>
    <Results/>
   </DataProvider>


   </div>
 
   
  );
}

export default App;
