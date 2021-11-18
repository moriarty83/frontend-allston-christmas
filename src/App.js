import logo from './logo.svg';
import './App.css';
import Button from './Styled Components/Button';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
    <Header />
     <Button primary>Button</Button>
     <Button>Button</Button>
    </div>
  );
}

export default App;
