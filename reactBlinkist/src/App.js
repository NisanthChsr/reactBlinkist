import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import {theme} from './Theming/Theming';
import MenuBar from '../src/components/organisms/Top/MenuBar';

function App() {
  return (
    <ThemeProvider theme={theme} >
     <MenuBar/>
     </ThemeProvider>
  );
}

export default App;
