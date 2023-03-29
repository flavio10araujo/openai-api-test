# openai-api-test
Connecting to OpenAI API.

I've created this project based on the openai-quickstart-node (https://github.com/openai/openai-quickstart-node) available in the OpenAI docs.

Technologies: 
* NodeJS
* React
* NextJS

It's a simple example of how to connect to the OpenAI API to call its models, like text-davinci-003, gpt-3.5-turbo and dall-e-2.

At the moment (03/2023), text-davinci-003 is the only one available for fine-tuning.

The model gpt-3.5-turbo is much cheaper and advanced, but it is not available for fine-tuning yet.

The model dall-e-2 is the one used for generating images.

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
