import logo from "./logo.svg";
import "./App.css";
import  Counter  from "./components/counter";
import TodoApp from './components/todoApp'

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoApp />
    </div>
  );
}

export default App;
