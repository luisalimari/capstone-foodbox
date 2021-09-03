import React from 'react';
import './App.css';
import Main from './components/main/Main';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

const THEME = createMuiTheme({
  typography: {
   "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
   "fontSize": 16,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={THEME}>
        <Main />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
