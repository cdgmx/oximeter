import logo from "./logo.svg";
import "./App.css";
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SensorReading from './components/SensorReading';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <SensorReading/>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
