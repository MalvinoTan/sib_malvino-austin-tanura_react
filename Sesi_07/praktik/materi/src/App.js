import './App.css';
import Example from "./components/Example"
import HaluClass from './components/HaluClass';
import HaluFunctional from './components/HaluFunctional';

const App = () => {
  return (
    <div className="App">
      <Example />
      {/* <HaluClass /> */}
      <HaluFunctional />
    </div>
  );
}

export default App;
