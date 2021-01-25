import Header from "./Components/Header";
import './Styles/nihilo.scss';

import {AddCredit} from "./Components/AddCredit";
import {DataProvider} from "./Contexts/DataContext";
import { Results } from "./Pages/Results";
import Transactions from "./Components/Transactions";
 

function App() {
  
 
  return (
   <div>
    <Header/> 
    <DataProvider>  
    <AddCredit/>
    <Results/>
   <Transactions/>
    </DataProvider> 
    
    
    
   </div>
 
   
  );
}

export default App;
