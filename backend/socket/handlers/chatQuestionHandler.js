const jwt = require("jsonwebtoken");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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",
});

const chatQuestionHandler = async (request, io) => {
  try {
    const { name, email } = jwt.verify(request.auth_token, "adilsiddiqui");
    // io.to(`user_${email}`).emit("chat_answer", {
    //   question: "How are you",
    //   answer: "fine sir",
    // });
    // console.log("decoded", decoded);
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: request.data.question }],
      model: "gpt-3.5-turbo",
    });

    console.log("chatCompletion", chatCompletion.choices[0].message.content);
    io.to(`user_${email}`).emit("chat_answer", {
      question: request.data.question,
      answer: chatCompletion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = chatQuestionHandler;
