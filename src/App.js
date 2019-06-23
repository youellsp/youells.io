import React from 'react';
import logo from './patrick_bitmoji.png';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <code>
          I'm Patrick.
        </code>
        <code>
          A <strong>Full Stack</strong> React and Node JS Developer
        </code>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/patrick-youells-2919a559/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="1.5x" className="font-awesome" icon={faLinkedinIn} />
        </a>
        <p>
          <code style={{'font-size': '8px'}}>
            More coming soon...
          </code>
        </p>
      </header>
    </div>
  );
}

export default App;
