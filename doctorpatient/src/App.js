import './App.css';
import React, { useEffect, useState ,useRef} from "react";
import ApiCancel from './Components/ApiCancel';
import Crards from './Components/Crards';
import NavBar from './Components/NavBar';
import UseEffectNavbar from './Components/UseEffectNavbar';






function App() {

const [count, setcount] = useState(0);
const ref = useRef(0);
const color= useRef('');

  useEffect(() => {

    console.log("hii this is app .js useeffect")
    if(color.current){
    color.current.classList.add('text-blue-500')
  }
    
  }, [])


  useEffect(() => {

    console.log("this is app.js will render based on my count update");
    
  }, [count])

  const updatecount=()=>{
    setcount(count+1)
    setcount(count+1)
    setcount(count+1)
  }

  
  let reffunc=()=>{
    ref.current+=1;
    console.log(`reffunc i am clicking${ref.current}`)
  }


  return (
    <div >
      {/* <NavBar/> */}
      <UseEffectNavbar/>
      <div className="text-center">
      <button onClick={updatecount} >clickc me </button>
       <h1>{count}</h1>
       <button  onClick={reffunc}>ref click me</button>
       <h2 ref={color}>abraar</h2>
      </div>

     

      {/* <Crards/> */}
      {/* <ApiCancel/> */}
    </div>
  );
}

export default App;
