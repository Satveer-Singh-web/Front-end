import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navtemp from './ConstComponents/Navtemp';
import MainHome from './Home/MainHome';
import MainStory from './Story/MainStory';
import MainMenu from './Menu/MainMenu';
import MainUpdates from './Updates/MainUpdates';
import { MainContact } from './Contacts.js/MainContact';


function App() {
  return (
    <div className="App">
      <Router>
        <Navtemp/>
        <Routes>
          <Route>
          <Route path='/' element={<MainHome/>}/>
          <Route path='/story' element={<MainStory/>}/>
          <Route path='/menu' element={<MainMenu/>}/>
          <Route path='/updates' element={<MainUpdates/>}/>
          <Route path='/contact' element={<MainContact/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
