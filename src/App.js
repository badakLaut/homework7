import './App.css';
import Header from "./components/header.js";
import Carousel from "./components/carousel";
import C1 from "./components/c1";
import C2 from "./components/c2";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
			<Header/>
      <Carousel/>
      <C1/>
      <C2/>
		</div>
  );
}

export default App;
