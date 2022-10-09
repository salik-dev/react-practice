import './App.css';
import { useState } from 'react';
import { sum } from './calculator';


const numberArray = [{
   id:1,
   name:1
},
{
  id:2,
  name:2
},
{
  id:3,
  name:3
},
{
  id:4,
  name:4
},
{
  id:5,
  name:5
},
{
  id:6,
  name:6
}

]

function App() {

  const [output , setOutput] = useState(0)

  function handleKeyPress(e){
    console.log("handleKeyPress", e.target.innerText)
     let name  = e.target.innerText
      name  = output + name;
     setOutput(name)
  }

  function handleResult(e){    
      
    /**
     * Handle multiple operator  + - 
     * duplicate operator not allowed
     */

       /**
        *  check output contian multiple operator 
        *    how to handle multiple operators 
        * 
        *  if(add operator is exist ) {function sum() { retunr sum..} }
        *  else if (subtract  is exist  (-)) { subtraction {}}
        * 
        * 
        */    
    

         
         let result =  output.split('+')
         setOutput(sum(result));


        console.log(result);
  }

  return (
    <div className="App">
      <label className='output-screen'>{output}</label>
      <div className='key-container'>
        {
          numberArray.map((e) => (
            <div className='btn-key' key={e.id} onClick={handleKeyPress}>{e.name}</div>
          ))
           
        }
        <div className='btn-key' key="+"  onClick={handleKeyPress}> + </div>
        <div className='btn-key' key="-"  onClick={handleKeyPress}> - </div>
        <div className='btn-key' key="="  onClick={handleResult}> = </div>

       </div>

    </div>
  );
}

export default App;
