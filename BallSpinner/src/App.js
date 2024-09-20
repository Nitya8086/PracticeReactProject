import { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
function App() {
  const [color, setcolor] = useState(["red", "yellow", "green", "blue"]);

  const [sendcolor, setSendcolor] = useState([]);

  function handlecolor(item) {
    console.log("item", item);
    setcolor(color.filter((value) => value !== item));
    setSendcolor([...sendcolor, item]);
  }

  function handlecolor1(item) {
    console.log("item", item);
    setSendcolor(sendcolor.filter((value) => value !== item));
    setcolor([...color, item]);
  }
  return (
    <div>
      <Component1 data={color} ondata={handlecolor} />
      <Component2 data1={sendcolor} ondata1={handlecolor1} />
    </div>
  );
}
export default App;
