import { useState } from "react";
import Container from "./components/Container";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TogglesBtns from "./components/TogglesBtns";


function App() {

  const [toggleStatus, setToggleStatus] = useState("ALL");

  return (
    <>
      <Navbar></Navbar>
      {/* Boxes */}
      <Container>
        <div className="grid grid-cols-3 gap-5 my-12">
          <div className="rounded-md text-white h-[200px] bg-gray-500 flex flex-col items-center justify-center">
            <h1 className="font-bold text-4xl">Pending</h1>
            <p className="font-bold text-2xl">10</p>
          </div>
          <div className="rounded-md text-white h-[200px] bg-purple-500 flex flex-col items-center justify-center">
            <h1 className="font-bold text-4xl">Submitted</h1>
            <p className="font-bold text-2xl">10</p>
          </div>
          <div className="rounded-md text-white h-[200px] bg-teal-500 flex flex-col items-center justify-center">
            <h1 className="font-bold text-4xl">Reviewed</h1>
            <p className="font-bold text-2xl">10</p>
          </div>
        </div>
      </Container>

      <TogglesBtns toggleStatus={toggleStatus} setToggleStatus={ setToggleStatus}></TogglesBtns>

      <Footer></Footer>
    </>
  );
}

export default App;
