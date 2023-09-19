
import './App.css';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (  // JSX - 90% to 95% html is used and the remaining part is javascript. 
    <>

      <Navbar title="The String" aboutText='About The String'></Navbar>
      <div className="container my-3">
        {/* <TextForm heading ="Enter the text to analyze below."></TextForm> */}
      <About/>
      </div>
    </>
  );
}
export default App;
