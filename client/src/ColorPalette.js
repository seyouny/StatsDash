import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});

  export default createMuiTheme;