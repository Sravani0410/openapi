import { useEffect, useState } from "react";
import "./App.css";
import { run, displayData } from "./openApiAi";

function App() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    // console.log("working")
    e.preventDefault();
    try {
      const result = await run(text);
      // console.log("result", result);
      setResponse(result);
      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const chatFetchData = async () => {
      try {
        const data = await displayData();
        // console.log("data", data);
        setResponse(data);
      } catch (err) {
        console.log(err);
      }
    };
    chatFetchData();
  }, []);
  // console.log("response", response);
  return (
    <div className="App">
      <div>
        {response.length > 0 ? (
          <>
            {response.map((item, index) => (
              <div key={index} className="response-item">
                <p>
                  <strong>{item.Prompt}</strong>
                  <strong>{item.Timestamps}</strong>
                </p>
                <div className="post">{item.Post}</div>
              </div>
            ))}
          </>
        ) : (
          <p>No data Available</p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter a Prompt here...."
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
