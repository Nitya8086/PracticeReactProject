import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";


const GlobalVariable =createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family:  'Inter', sans-serif;
}
body{
  background-color: #323334;
  color:white;
  height:100vh;
}

`
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    < GlobalVariable/>
    <App />
  </React.StrictMode>
);
