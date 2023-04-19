import { Configuration, OpenAIApi } from "openai";

const fs = require("fs");

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

  try {
    const audio = fs.createReadStream(
      "/Users/flavio.dearaujo/files_testes/audio-v2.m4a"
    );

    async function runTranscription() {
      const resp = await openai.createTranscription(audio, "whisper-1");

      return resp;
    }

    async function runTranslation() {
      const resp = await openai.createTranslation(audio, "whisper-1");

      return resp;
    }

    let completion;

    if (chat === "2") {
      completion = await runTranslation();
    } else {
      completion = await runTranscription();
    }

    res.status(200).json({ result: completion.data.text });
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
