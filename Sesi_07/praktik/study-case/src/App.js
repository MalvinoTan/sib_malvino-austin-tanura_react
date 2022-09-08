import './App.css';
import ClockClass from './components/ClockClass';
import ClockFunctional from './components/ClockFunctional';

const App = () => {
  return (
    <div className="App">
      <ClockClass />
      <ClockFunctional />
    </div>
  );
}

export default App;
