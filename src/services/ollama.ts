"use strict";

import { Ollama } from "ollama";

function createClient() {
  return new Ollama({ host: "http://127.0.0.1:11434" });
}

async function checkConnection() {
  try {
    const ollama = createClient();
    await ollama.list();
    return true;
  } catch {
    return false;
  }
}

export { checkConnection };
