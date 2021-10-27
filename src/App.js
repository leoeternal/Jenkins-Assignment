import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react/cjs/react.development';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [btnText, updatebtnText] = useState('Enable Dark Mode')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      updatebtnText('Disable Dark Mode');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      updatebtnText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode} btnText={btnText} title="TextUtils" aboutText="About TextUtils" />
        <Switch>
          <Route exact path="/">
            <div className="container">
              <TextForm mode={mode} heading="Enter the text to analyze below" />
            </div>
          </Route>
          <Route exact path="/about">
            <div className="about-container">
              <About />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
