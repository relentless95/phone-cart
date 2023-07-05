import { useState } from "react";
import { useGlobalContext } from "./context/Context";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

function App() {
  // const [loading, setLoading] = useState(true);
  // const loading = false;

  // console.log(loading);
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "6rem" }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
