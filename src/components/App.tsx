import { render } from "ink";
import InputBox from "./InputBox.js";
import React from "react";

const App = () => {
  return render(React.createElement(InputBox));
};

export default App;
