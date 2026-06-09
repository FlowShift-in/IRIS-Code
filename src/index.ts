import App from "./components/App.js";
import { checkOllamaStatus } from "./services/ollama.js";

const index = async () => {
  console.clear();
  console.log("Welcome to IRIS AI Coding Agent");
  console.log("----------------------------------");
  console.log("");

  const OllamaStatus = async () => {
    const status = await checkOllamaStatus();
  };

  OllamaStatus();

  App();
};

index();
