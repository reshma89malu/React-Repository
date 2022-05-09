//import logo from './logo.svg';
import './App.css';
import {Header,Footer} from './Home'
import Contacts from './Contact';
import Welcome from './Welcome';

function greet(name){
  return <h3>Welcome {name}</h3>
}

function App() {
  var name="Geethu";
  var age=20;
  return (
  
    <div className="App">
  <div><Header/></div>
<p>Name:{name}</p>
<p>Age: {age}
 
</p>
<button >Increment</button>
<p>{greet(name)}</p>
<div><Contacts name="student " id={{name:"John",age:20}} st={{color:"green"}}/></div>
<p>Some Contents...</p>
<div><Contacts name="teacher " id={{name:"Mary",age:40}} st={{color:"orange"}}/></div>
<div><Footer/></div>

    </div>
  );
}

export default App;