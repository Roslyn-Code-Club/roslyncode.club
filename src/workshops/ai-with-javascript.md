---
title: AI with JavaScript
year: 2022
draft: false
category: js
number: 6
---

## Workshop 6: AI with JavaScript

Artificial intelligence is the new wave in technology and the programming space. Today you'll learn how to interact with AI models from HuggingFace using JavaScript.

### Basic Setup

We'll be using Replit to get started quickly.

- Create a new Repl and select the Node.js template.

- At the bottom left of Replit, you should see a section titled **"Tools"**.

  - Click **"Packages"**, search **@huggingface/inference**, and install it to your Repl.

- Locate the file named **package.json** in your project and insert the following line:
  - **"type": "module",** -> this allows us to use the ES6 syntax "import" in our code.
  - Below is an example of what your **package.json** file should look like:

```json
//package.json
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@huggingface/inference": "^2.1.2",
    "@types/node": "^18.0.6",
    "node-fetch": "^3.2.6"
  }
}
```

### Text Generation

Now that we have set up our project, we can proceed to interacting with the models. You can find the models [on HuggingFace](https://huggingface.co/models).

For this example, we'll be using [openai-gpt](https://huggingface.co/openai-gpt) for the **TextGeneration** task.

First, we need to import the class we'll be using from the HuggingFace package.

- The `huggingface/inference` package allows us to interact with 100,000+ machine learning models through HuggingFace's API.

```javascript
//index.js
import { HfInference } from "@huggingface/inference";
```

Next we'll be initializing the class to a variable that we'll call "inference".

```javascript
//index.js
import { HfInference } from "@huggingface/inference";

const inference = new HfInference();
```

To make this somewhat interactive, we'll use "prompt" to get user input. Let's prompt the user to write part of a sentence and have openai-gpt try and fill in the rest.

```javascript
//index.js
import { HfInference } from "@huggingface/inference";

const inference = new HfInference();

let input = prompt("Write part of a sentence: ");
```

Now we can declare a new variable and set the value of it to be the response from the HuggingFace function.

- Notice that since the type of task is "Text Generation", that's the function we'll be using.
  - The corresponding model is "openai-gpt", you can't just enter an imaginary model.

We can then `console.log` our response once we receive it.

```javascript
//index.js
import { HfInference } from "@huggingface/inference";

const inference = new HfInference();

let input = prompt("Write part of a sentence: ");

let response = await inference.textGeneration({
  model: "openai-gpt",
  inputs: input,
});

console.log(response);
```

If you execute the code and enter the prompt, you should see a response in the console that looks like below:

```json
//Input: My name is Tom and I love

//Output:
{
  generated_text: 'My name is Tom and I love you. " \n' +
    ' " i love you too, tom. be honest if you want to go in public. " \n' +
    ' " yes! " \n' +
    ' " good. my father has invited us to go through several pictures.'
}
```

### Conversational

That was a neat example of using a Text Generation model. Now, we're going to create a simple chatbot using a Conversational AI model. We'll be using [DialoGPT-Medium by Microsoft](https://huggingface.co/microsoft/DialoGPT-medium).

It's recommended you sign up to [HuggingFace](https://huggingface.co/join) and create an access token to get pass the rate limits.

- Once you've signed up, click your profile icon on the top right
- Click Settings
- Click Access Tokens
- Create one with the "Write" permissions and copy that.

We'll add a line where we declare our access token.

- Note that this is only for ease of use, and in actual practice, **you should NEVER expose your access token in your actual code**.

```javascript
//index.js
import { HfInference } from "@huggingface/inference";

const HF_TOKEN = "hf-abcdefg123456";

const inference = new HfInference(HF_TOKEN);

let input = prompt("Say something! ");
```

Now let's call the HuggingFace API. This time, we'll be using the **Conversational** task function and pass in **"microsoft/DialoGPT-medium"** as the model.

```javascript
//index.js
import { HfInference } from "@huggingface/inference";

const HF_TOKEN = "hf-abcdefg123456";

const inference = new HfInference(HF_TOKEN);

let input = prompt("Say something! ");

let apiResponse = await inference.conversational({
  model: "microsoft/DialoGPT-medium",
  inputs: input,
});
```

Let's use a while loop to keep the conversation going.

- The while condition is checking to see if there is a generated response returned by the AI model.
  - If this condition is true, that means the AI model has actually responded to us, so we'll keep the conversation going.
  - **apiResponse.conversation.generated_responses[0]** is simply the response returned by the AI model.

```javascript
//index.js
import { HfInference } from "@huggingface/inference";

const HF_TOKEN = "hf-abcdefg123456";

const inference = new HfInference();

let input = prompt("Say something! ");

let apiResponse = await inference.conversational({
  model: "microsoft/DialoGPT-medium",
  inputs: input,
});

while (apiResponse.conversation.generated_responses.length > 0) {
  input = prompt(apiResponse.conversation.generated_responses[0]);
  apiResponse = await inference.conversational({
    model: "microsoft/DialoGPT-medium",
    inputs: input,
  });
}
```

That is how you create a simple chatbot using a Conversational AI model! This only scratches the surface with what you can do with AI models, so I highly encourage you to explore it for yourself.
