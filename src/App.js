import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';
import {run} from './openApiAi';

function App() {
  const [text,setText]=useState("");
  const [response,setResponse]=useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = async(e) => {
    // console.log("working")
    e.preventDefault();
    try{
      const result=await run(text);
      console.log("result",result)
      setResponse(result);
      setText('')
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
     const chatFetchData=async()=>{
       try{
        //  console.log("gemini key value",process.env.REACT_APP_GEMINI_API_KEY)
       }
       catch(err){
        console.log(err)
       }
     }
     chatFetchData()
  },[])
  // console.log("response",response)
  return (
    <div className="App">
      <div>
        {response}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea 
          placeholder="Enter a text here...."
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
