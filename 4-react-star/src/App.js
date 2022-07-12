import logo from './logo.svg';
import './App.css';
import {Star} from './Star.jsx';

function App() {
  const arr = [false, false, false, false, false].map(
    (status) => <Star active={status} />
);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Hello, {Name(user)}
        </div>
        <div style={{marginTop: "1rem"}}>
          {arr}
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
