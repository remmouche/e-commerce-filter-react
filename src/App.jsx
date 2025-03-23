import Navbar from "./pages/Navigation/Navbar";
import Products from "./pages/Products/Products";
import Recommended from "./pages/Recommended/Recommended";
import Sidebar from "./pages/Sidebar/Sidebar";

function App() {
  return (
    <>
      {/* <span>Bismi Allah</span> */}
      <Sidebar />
      <Navbar />
      <Recommended />
      <Products />
      <Sidebar />
    </>
  );
}

export default App;
