import Header from "./Components/Header";
import './Styles/nihilo.scss';

import {AddCredit} from "./Components/AddCredit";
import {DataProvider} from "./Contexts/DataContext";
import { Results } from "./Pages/Results";
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
   
    </DataProvider> 
    
    
    
   </div>
 
   
  );
}

export default App;
