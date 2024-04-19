import logo from './logo.svg';
import './App.css';
import {AppBar, Toolbar, Container} from '@mui/material';
import RoutesApp from './routes/RoutesApp';


function App() {
  return (
    <div>
      <AppBar position='static'><Toolbar>Space Travels</Toolbar> </AppBar>
      <Container>
        <RoutesApp></RoutesApp>
     </Container>
    </div>
  );
}

export default App;
