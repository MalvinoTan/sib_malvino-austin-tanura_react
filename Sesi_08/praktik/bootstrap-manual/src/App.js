// import './App.css';

import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
