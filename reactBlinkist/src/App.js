import logo from './logo.svg';
import './App.css';
import Logo from '../src/components/atoms/Logo/Logo';
import BooksCollection from './components/organisms/ToolBar/BooksCollection';
import { ThemeProvider } from '@material-ui/styles';
import {theme} from './components/Theming/Theming'
import Form from '../src/components/atoms/Text/TextField'
import MenuBar from '../src/components/organisms/Top/MenuBar'

function App() {
  return (
    <ThemeProvider theme={theme} >
     <MenuBar/>
     </ThemeProvider>
  );
}

export default App;
