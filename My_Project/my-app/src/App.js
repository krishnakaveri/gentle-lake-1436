import logo from './logo.svg';
import './App.css';
import LowerNavbar from "./Components/Navbar/LowerNavbar";
import Extranavbar from "./Components/Navbar/Extranavbar";
function App() {
  
  return (
    <div className="App">
      {/* <Router> */}
      {/* <Navbar/> */}
      <Extranavbar/>
      <LowerNavbar/>
      {/* <DummmyNavbar/> */}
      {/* <NewNavbar/> */}
       
       <Footer/>
       {/* </Router> */}
    </div>
  );
}

export default App;
