import { OpenAIApi, Configuration } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Endpoint /api/completion
export const runtime = "edge";

// Configuration of open ai
const config = new Configuration({
  apiKey: process.env.OPENAI_API,
});

const openai = new OpenAIApi(config);

export const POST = async (req) => {
  // Extract the prompt from body
  const { prompt } = await req.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are a helpful AI embedded in a blog/content creation app that is used to autocomplete sentences.
        The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
        AI is a well-behaved and well-mannered individual.
        AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.`,
      },
      {
        role: "user",
        content: `
        I am writing a piece of text in a Content generation text editor app.
        Help me complete my train of thought here: ${prompt}
        what is already there on prompt don't repeat this just continue afterwards. 
        keep the tone of the text consistent with the rest of the text.
        keep the response short and sweet.
        `,
      },
    ],
    // It will allow us to show the stream effect of ai
    stream: true,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
};
