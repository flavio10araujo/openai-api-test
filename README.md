# openai-api-test
Connecting to OpenAI API.

I've created this project based on the openai-quickstart-node (https://github.com/openai/openai-quickstart-node) available in the OpenAI docs.

Technologies: 
* NodeJS
* React
* NextJS

It's a simple example of how to connect to the OpenAI API to call its models:

* text-davinci-003 (in the Text module)
* gpt-3.5-turbo or gpt-4 (in the Chat module)
* openai.createImage (in the Image module)
* whisper-1 (in the Audio module)

At the moment (03/2023), text-davinci-003 is the only model available for fine-tuning.

The model gpt-3.5-turbo is much cheaper and advanced, but it is not available for fine-tuning yet.

### How to run the project

1. If you don’t have Node.js installed, install it from here (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Navigate into the project directory

$ cd openai-api-test

4. Install the requirements

$ npm install

5. Make a copy of the example environment variables file

On Linux systems:

$ cp .env.example .env

On Windows:

$ copy .env.example .env

6. Add your API key to the newly created .env file

7. Run the app

$ npm run dev

### Modules

## Text

Text module uses the model text-davinci-003.
It means that we can fine-tune this model but we cannot use it as a chat.

## Chat

Chat module uses the model gpt-3.5-turbo or gpt-4 (you can change it in the code).
It means that we cannot fine-tune this model but we can use it as a chat.

<img width="1425" alt="image" src="https://user-images.githubusercontent.com/6059213/232937597-0f1c5ff7-80d6-4f0b-85a6-4988792be357.png">

## Image

Image module calls openai.createImage (the model dall-e-2).
It means that it is capable of generating images according to the prompt inserted.

<img width="1553" alt="image" src="https://user-images.githubusercontent.com/6059213/232940187-f30d0fc1-a324-4a9e-9b46-1cc1718e3288.png">

## Audio

Audio module uses whisper-1 model.
You can use to make a translation or a transcription of an audio.


