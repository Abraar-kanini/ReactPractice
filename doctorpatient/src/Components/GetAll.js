import React, { useEffect, useState} from 'react';


export default function GetAll() {
    const [length, setlength] = useState(0)
    const [res, setres] = useState([])
    const [count, setCount] = useState(0)
    const [disable, setdisable] = useState(false);

    console.log(count);
    useEffect(() => {

        let fetchall=async()=>{

            const Data= await fetch("https://localhost:7043/api/Doctor")
            const response= await Data.json();
            setlength(response.length);
            console.log(response.length);
            
            setres(response);
            console.log(response);

            
        }
        fetchall();
      
    }, [])

    const nextButton=()=>{
        if(count<length-1){
            setCount(count+1);
            console.log(count);
        }
        else if(count===length-1){
            console.log("Setting disable state to true");       
            setdisable(true);
            console.log("your button is disabled")
        }


    }

    const buttonChnage=(index)=>{
         setCount(index);
    }
    
  return (
    <>
    <br/>
    <br/>
    <div className="flex flex-col space-y-3">

      <label>
        <input type="radio" name="option" value="option1" />
        {res[count]?.id}
      </label>

      <label>
        <input type="radio" name="option" value="option2" />
        {res[count]?.fileDescription}
      </label>

      <label>
        <input type="radio" name="option" value="option3" />
        {res[count]?.doctorName}
      </label>

      <label>
        <input type="radio" name="option" value="option4" />
        {res[count]?.doctorSpecialist}
      </label>

      <label>
        <input type="radio" name="option" value="option5" />
        {res[count]?.filePath}
      </label>
      <button disabled={disable} className="border border-b-teal-400 w-28 bg-green-200" onClick={()=>nextButton}>Next Button</button>
      </div>



      <div className="flex flex-col">
        {res.map((e,index) => (
          <button onClick={()=>buttonChnage(index)} key={e.id}>{index+1}</button>
        ))}
      </div>
    </>
  );
}
