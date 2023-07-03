import { useState } from "react";
import { useGlobalContext } from "./context/Context";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const { greeting } = useGlobalContext();
  console.log(greeting)

  return (
    <main>
      <Navbar />
    </main>
  );
}

export default App;
