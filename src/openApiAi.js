const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY=process.env.REACT_APP_GEMINI_API_KEY
// console.log("apiKey",API_KEY)
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export async function run(prompt) {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
}



