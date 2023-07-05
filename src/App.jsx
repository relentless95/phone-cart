import { useState } from "react";
import { useGlobalContext } from "./context/Context";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
