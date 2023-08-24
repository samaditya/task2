import './App.css';
import UserBasicInfo from './components/UserBasicInfo';
import CompanyDetails from './components/CompanyDetails';
import Creditcard from './components/Creditcard';
import Orders from './components/Orders';

function App() {
  return (
    <div className="container my-3">
    <div className="App">
      <UserBasicInfo/>
      <CompanyDetails/>
      <Creditcard/>
      <Orders/>
    </div>
    </div>
    
  );
}

export default App;
