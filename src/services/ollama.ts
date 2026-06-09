const checkOllamaStatus = async () => {
  const url = "http://localhost:11434";

  try {
    const res = await fetch(url, { method: "GET" });
    console.log("Ollama is running");

    if (res.ok) {
      return "Ollama is running";
    } else {
      return "Ollama is not running";
    }
  } catch (error) {
    console.log("Ollama is not running because of this error ", error);
    return "Ollama is not running";
  }
};

const OllamaRunning = async () => {
  const status = await checkOllamaStatus();

  if (status) {
    console.log("Ollama is running");
  } else {
    console.log("Ollama is not running");
    process.exit(1);
  }
};

export { checkOllamaStatus, OllamaRunning };
