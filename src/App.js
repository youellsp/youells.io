import React from 'react';
import ReactGA from 'react-ga';
import logo from './patrick_bitmoji.png';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core';
import resume from './file-downloads/pyouells_ui_lead_resume.pdf';

ReactGA.initialize('UA-115488087-1');
ReactGA.pageview(window.location.pathname + window.location.search);

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

const logDownloadEvent = () => {
  ReactGA.event({
    category: 'Resume',
    action: 'Clicked download resume'
  });
};

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
        <div style={{'marginTop': '20px'}}>
          <Tooltip title="Check out my LinkedIn" aria-label="Checkout My LinkedIn!" placement="left-start">
            <a
                className="App-link"
                href="https://www.linkedin.com/in/patrick-youells-2919a559/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="2x" className="font-awesome" icon={faLinkedinIn} />
            </a>
          </Tooltip>
          <Tooltip title="Download my resume" aria-label="Download My Resume" placement="right-start">
            <a
                className="App-link"
                href={resume}
                onClick={logDownloadEvent}
                target="_blank"
                download="patrick_youells_resume.pdf"
            >
              <FontAwesomeIcon size="2x" className="font-awesome" icon={faFileDownload} />
            </a>
          </Tooltip>
        </div>
        <div>
          <code style={{'fontSize': '10px'}}>
            More coming soon...
          </code>
        </div>
      </header>
    </div>
  );
}

export default App;
