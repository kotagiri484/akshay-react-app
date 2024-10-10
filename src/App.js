import logo from "./logo.svg";
import "./App.css";
import  Counter  from "./components/counter";
import TodoApp from './components/todoApp';
import {SwiggyApi} from './components/swiggyApi'

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoApp />
      <SwiggyApi/>
    </div>
  );
}

export default App;
