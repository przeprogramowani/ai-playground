import "dotenv/config";
import { Configuration, OpenAIApi } from "openai";
import { SYSTEM_MESSAGE, USER_MESSAGE } from "./prompts.js";
import { createLoader, cancelLoader } from "./utils.js";
import { MESSAGE_CATEGORY } from './functions.js';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

createLoader("Pobieram odpowiedź z GPT-4");

const completion = await openai.createChatCompletion({
  model: "gpt-4-0613",
  messages: [
    { role: "system", content: SYSTEM_MESSAGE },
    {
      role: "user",
      content: `
        ${USER_MESSAGE}
      `,
    },
  ],
  functions: [MESSAGE_CATEGORY],
  function_call: { name: MESSAGE_CATEGORY.name }
});

cancelLoader();

console.log(JSON.parse(completion.data.choices[0].message.function_call.arguments));