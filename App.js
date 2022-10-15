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

];
let operatorList = ['+', '-'];

function App() {

  const [output , setOutput] = useState('')

  function handleKeyPress(e){
    console.log("handleKeyPress", e.target.innerText)
     let name  = e.target.innerText
      name  = output + name;
     setOutput(name)
  }
function calculation (a, b, operator){
  if(operator==='+'){
    return a + b;
  }
  else{
    return a - b;
  }
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
        * 2+3-2
        * 
        */    
       for(let j=0; j<operatorList.length; j++){
         let resultant=[];
let operator = operatorList[j]
         for(let i=0; i<output.length;i++){
          console.log('output', output);
          if(output.charAt(i)===operator){
            resultant.push(calculation(parseInt(output.charAt(i-1)), parseInt(output.charAt(i+1), operator )))
            // output[i]=parseInt(output.charAt(i-1)) +parseInt(output.charAt(i+1))
          }
          else{
            resultant.push(output.charAt(i))
          }
        
          
         }
         setOutput(resultant)

      }
       console.log('result ' ,output);
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
  console.log(output);
}

export default App;
