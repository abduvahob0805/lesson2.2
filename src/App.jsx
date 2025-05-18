import { useState } from 'react';
import './App.css'

function App() {

  let [son,setSon]=useState (0)

  
   function plus(){
    son++;
    setSon(son)
  }
   function minus(){
    son--;
    setSon(son)
  }

  
   let [hide,setHide]=useState(true)
   let [soz,setSoz]=useState()

   function yoz(e){
        setSoz(e.target.value);
   }
  
  
  


  return (
    <div>
        <h1>Counter</h1>
      <div className="page1 container">
 <button className='btn' onClick={plus}>+</button>
      <h2>Son: {son}</h2>
      <button className='btn' onClick={minus}>-</button>
      </div>
      <hr />
      
            <button className='hide' onClick={()=> setHide(true)}>Hidden</button>
            <button className='show' onClick={()=> setHide(false)}>Show</button>
    
      <div className="page2 container" style={{display:hide?"block":"none"}}>
             <h1>Hidden Component</h1>
            <img src="./mars.png" alt="" />
      </div>
      <hr />

        <h1>Input change</h1>

          <div className="page3 container">
 <input type="text" placeholder='Text..' value={soz} onChange={yoz} />
       <p>Your text: {soz}</p>   
          </div>

       


      

    </div>
  )
}

export default App
