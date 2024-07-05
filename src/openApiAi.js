const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY=process.env.REACT_APP_GEMINI_API_KEY
const GOOGLE_SHEET=process.env.REACT_APP_GOOGLE_SHEET
// console.log("apiKey",GOOGLE_SHEET)
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export async function run(prompt) {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // console.log(text);
    const data={
      Timestamps:new Date().toLocaleString(),
      Prompt:prompt,
      Post:text,
    }
    const newResponse=await fetchData(data);
    return newResponse;
}

async function fetchData(data) {
    await fetch(GOOGLE_SHEET,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({data})
    });
}

export async function displayData(){
  const response=await fetch(GOOGLE_SHEET,{
    method: 'GET',
  });
  const data=await response.json();
  return data
}



