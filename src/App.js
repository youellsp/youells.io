import React from 'react';
import logo from './patrick_bitmoji.png';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core';
import Fab from "@material-ui/core/Fab";
import resume from './file-downloads/pyouells_ui_lead_resume.pdf';


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
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
        <div>
          <Tooltip title="Check out My LinkedIn!" aria-label="Checkout My LinkedIn!" placement="left-start">
            <a
                className="App-link"
                href="https://www.linkedin.com/in/patrick-youells-2919a559/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="1.5x" className="font-awesome" icon={faLinkedinIn} />
            </a>
          </Tooltip>
          <Tooltip title="Download My Resume" aria-label="Download My Resume" placement="right-start">
            <a
                className="App-link"
                href={resume}
                target="_blank"
                download="patrick_youells_resume.pdf"
            >
              <FontAwesomeIcon size="1.5x" className="font-awesome" icon={faFileDownload} />
            </a>
          </Tooltip>
        </div>
        <div>
          <code style={{'font-size': '8px'}}>
            More coming soon...
          </code>
        </div>
      </header>
    </div>
  );
}

export default App;
