import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from 'react-router-dom';

{/* <BrowserRouter basename={process.env.PUBLIC_URL}>
<React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById("root")
</BrowserRouter> */}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
