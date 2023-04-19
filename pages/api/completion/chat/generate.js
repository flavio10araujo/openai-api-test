import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const chat = req.body.chat || "";
  if (chat.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid message",
      },
    });
    return;
  }

  function sanitizeChatHistory(messages) {
    return messages.map((message) => {
      return {
        role: message.role,
        content: message.content,
      };
    });
  }

  function generatePrompt(chat, messages) {
    const basicMessagesConfig = [
      {
        role: "system",
        content:
          "You are Buddy a helpful assistant that knows everything about Polifono.com.",
      },
      {
        role: "system",
        content:
          "You should acts as if you are an employee that work at Polifono.com since the beginning of the company.",
      },
    ];

    const chatHistory = sanitizeChatHistory(messages);

    return [
      ...basicMessagesConfig,
      ...chatHistory,
      { role: "user", content: chat },
    ];
  }

  try {
    const completion = await openai.createChatCompletion({
      // GPT-3.5 family (can not be fine-tuned; most capable GTP-3.5 mmodel; optimized for chat; it performs at a similar capability to text-davinci-003 but at 10% the price per token)
      //model: "gpt-3.5-turbo",
      model: "gpt-4",
      temperature: 0.5,
      max_tokens: 1000,
      messages: generatePrompt(chat, req.body.messages),
    });

    res
      .status(200)
      .json({ result: completion.data.choices[0].message.content });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}
