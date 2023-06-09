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

  const image = req.body.prompt || "";
  if (image.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid image",
      },
    });
    return;
  }

  try {
    const completion = await openai.createImage({
      prompt: generatePrompt(image),
      n: 1,
      size: "512x512",
    });

    res.status(200).json({ result: completion.data.data[0].url });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
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

function generatePrompt(image) {
  const capitalizedImage =
    image[0].toUpperCase() + image.slice(1).toLowerCase();
  return capitalizedImage;
}
