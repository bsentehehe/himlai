import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: "Say hello in one short sentence" },
      ],
    });

    return Response.json({
      success: true,
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}