import Sidebar from './Components/Sidebar/Sidebar'
import Topbar from '../src/Components/Sidebar/Topbar'
import './App.css';

import Main from'./Components/Main/Main'
import ProfileCard from './Components/ProfileCard/ProfileCard';

function App() {
  return (
    <div className="App">
   
     <Sidebar/>
     <div className='container'>
     <Main/>
     <ProfileCard/>
     </div>
     </div>

  );
}

export default App;
