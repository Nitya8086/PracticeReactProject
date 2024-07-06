import { useState } from "react";

import "./App.css";
import ImageUpload from "./ImageUpload";

function App() {
  const [count, setCount] = useState(0);

  return <>
  <ImageUpload/>
  </>;
}

export default App;
