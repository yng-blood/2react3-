import './App.css';
import FunctionalUserForm from './components/Form/FunctionalUserForm';
import { Routes, Route } from 'react-router-dom';
import { UserTile } from './components/Form/UserTile';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<FunctionalUserForm/>}/>  
          <Route path="/userTile" element={<UserTile/>}/>
      </Routes>
    </div>
  );
}

export default App;
