import React,{useState} from 'react' 
 const Counter = () => {

    const [count, setCount] =useState(0);

    const handleInc=()=>{
        return count <10 ? setCount(count + 1) : count

    }
    const handleDec=()=>{

        return count >0 ? setCount(count - 1) : count
    }

  return (
    <>
      <h1>Counter Application BY Akshay</h1>
      <h2>{count}</h2>
      <button onClick={handleInc}>+1</button>&nbsp;&nbsp;&nbsp;
      <button onClick={handleDec}>-1</button>
      
    </>
  );
};
export default Counter;
