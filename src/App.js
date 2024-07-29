import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost/>
      
    </div>
  );
}

export default App;
