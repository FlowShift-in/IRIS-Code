import axios from "axios";

const checkOllamaStatus = async () => {
  const url = "http://localhost:11434";

  try {
    const res = await axios.get(url);

    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};

const OllamaRunning = async () => {
  const status = await checkOllamaStatus();

  if (!status) {
    console.log("Ollama is not running");
    process.exit(1);
  }
};

export { checkOllamaStatus, OllamaRunning };
