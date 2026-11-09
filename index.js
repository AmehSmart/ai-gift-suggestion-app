import { checkEnvironment } from "./utils.js"
// Importing the evironment variable at the top
// That is a utility to check if the evironment is set well
import { OpenAI } from "openai/client.js";

// Making the connection to the ai 
const openai = new OpenAI({
    apiKey : process.env.AI_KEY,
    baseURL : process.env.AI_URL,
    dangerouslyAllowBrowser: true 
})

checkEnvironment(); // checking the evironment to return true or false 
// here is prompt for the model 
// const prompt = "Suggest some gifts for someone who is a university school girl and also my girlfriend that i love so much.";

// console.log('Prompt:', prompt)
// console.log('Making AI request...')
// console.log("Making AI request...");

// try {
//   const response = await openai.chat.completions.create({
//     model: process.env.AI_MODEL,
//     messages: [
//       {
//         role: "user",
//         content: prompt,
//       },
//     ],
//   });

//   console.log("AI response:");
//   console.log(response.choices[0].message.content);

// } catch (error) {
//   if (error.status === 401 || error.status === 403) {
//     console.error(
//       "Authentication error: Check your AI_KEY and make sure it’s valid."
//     );
//   } else if (error.status >= 500) {
//     console.error(
//       "AI provider error: Something went wrong on the provider side. Try again shortly."
//     );
//   } else {
//     console.error(
//       "Unexpected error:",
//       error.message || error
//     );
//   }
// }

// Create a string containing the prompt for the model
const userPrompt = "Suggest some gifts for someone who loves hiphop music"

// Wrap the prompt in a message object with a user role

const userMessage = {
    role : "user",
    content : userPrompt
}




// Send the prompt to the model as a chat completion request with 
// a model and messages array. Await its response. 
const response = await openai.chat.completions.create(
  { 
     model: process.env.AI_MODEL,
     messages :[userMessage]
    }
)

console.log(response.choices[0].message.content)