import Paths from './routes/Paths';
import './styles/global.scss'
import {UserProvider} from './context/UserContext.jsx'


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Paths></Paths>
      </UserProvider>
    </div>
  );
}

export default App;
