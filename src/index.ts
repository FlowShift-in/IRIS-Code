import App from "./components/App.js";
import { checkConnection } from "./services/ollama.js";

const index = async () => {
  console.clear();
  console.log("Welcome to IRIS AI Coding Agent");
  console.log("----------------------------------");
  console.log("");

  const ollamaStatus = async () => {
    const status = await checkConnection();

    if (status) {
      App();
    } else {
      console.log("Ollama isn't Running :(");
      return;
    }
  };

  ollamaStatus();
};

index();
