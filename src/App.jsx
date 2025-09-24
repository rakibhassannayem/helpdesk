import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import IssuesManagement from "./components/IssuesManagement";
import { Suspense } from "react";

const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchIssues();
  return (
    <>
      <Navbar></Navbar>
      
      <Suspense fallback={<p className="text-2xl text-purple-500 font-semibold text-center my-10">Loading. . . .</p>}>
        <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
