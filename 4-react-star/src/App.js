import logo from './logo.svg';
import './App.css';
import {Stars} from './Stars.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Hello, {Name(user)}
        </div>
        <div style={{marginTop: "1rem"}}>
          <Stars />

        </div>
        
      </header>
    </div>
  );
}
function Name(user){
  return user.firstname + ' ' + user.lastname;
}
const user = {
  firstname: 'Ha',
  lastname: 'Do'
}

export default App;
