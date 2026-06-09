import fs from "fs";

const savePrompt = ({ prompt }: { prompt: string }) => {
  if (!prompt) {
    throw new Error("Prompt is required");
  }

  if (typeof prompt !== "string") {
    throw new Error("Prompt must be a string");
  }

  fs.writeFile("prompt.txt", prompt, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

export default savePrompt;
