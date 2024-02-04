import './App.css';
import React, { useEffect, useState } from "react";
import ApiCancel from './Components/ApiCancel';
import Crards from './Components/Crards';
import NavBar from './Components/NavBar';
import UseEffectNavbar from './Components/UseEffectNavbar';






function App() {

const [count, setcount] = useState(0);

  useEffect(() => {

    console.log("hii this is app .js useeffect")
    
  }, [])


  useEffect(() => {

    console.log("this is app.js will render based on my count update");
    
  }, [count])
  



  return (
    <div >
      {/* <NavBar/> */}
      <UseEffectNavbar/>
      <div className="text-center">
      <button onClick={()=>{
        setcount(count+1);
      }} >clickc me </button>
       <h1>{count}</h1>
      </div>

     

      {/* <Crards/> */}
      {/* <ApiCancel/> */}
    </div>
  );
}

export default App;
