import Header from "./components/Header";
import Main from "./components/Main";
import Button from './Styled Components/Button';

function App() {
  return ( 
    <div className ="Main">
      <Header />
      <Main />
    </div>,
    <div className="App">
     <Button primary>Button</Button>
     <Button>Button</Button>

    </div>
  );
}

export default App;
