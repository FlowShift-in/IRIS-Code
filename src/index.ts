import App from "./components/App.js";
import { checkOllamaStatus } from "./services/ollama.js";

const index = async () => {
  console.clear();
  console.log("Welcome to IRIS AI Coding Agent");
  console.log("----------------------------------");
  console.log("");

  const status = await checkOllamaStatus();

  if (!status) {
    console.log("Ollama is not running");
    return;
  }

  App();
};

index();
