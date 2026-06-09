import App from "./components/App.js";
import { checkOllamaStatus } from "./services/ollama.js";

const index = () => {
  console.clear();
  console.log("Welcome to IRIS AI Coding Agent");
  console.log("----------------------------------");
  console.log("");

  const OllamaStatus = async () => {
    const status = await checkOllamaStatus();

    if (!status) {
      console.log("Ollama is not running");
      return;
    } else {
      console.log("Ollama is running");
    }
  };

  OllamaStatus();

  App();
};

index();
