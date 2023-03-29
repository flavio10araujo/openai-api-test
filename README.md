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

The idea of this project was to create an internal chat that could be used in a company with knowledge that the normal ChatGPT is not able to know (like internal processes, info about internal projects, etc). The chat would act as an employee that knows everthing about the company (all the processes, projects and technologies) and it would talk only about the company.

For that it is necessary to use a model that we can fine-tune.

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

### Tabs

## Text

Text tab uses the model text-davinci-003.
It means that we can fine-tune this model but we cannot use it as a chat.

## Chat

Chat tab uses the model gpt-3.5-turbo.
It means that we cannot fine-tune this model but we can use it as a chat.

<img width="1417" alt="image" src="https://user-images.githubusercontent.com/6059213/228580579-d4b328ca-d301-4143-9dfd-81bf4eacbdd0.png">

## Image

Image tab uses the model dall-e-2.
it means that it is capable of generating images according to the prompt inserted.

<img width="1413" alt="image" src="https://user-images.githubusercontent.com/6059213/228580835-125ff31b-691d-475c-b0ef-43b69fa125e9.png">


